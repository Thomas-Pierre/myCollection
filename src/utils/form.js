import { translate } from './translate';

export function checkAllInputErrors(form) {
	form.addEventListener('submit', () => {
		form.querySelectorAll('input, textarea').forEach((input) => {
			input.tested = true;
			input.dispatchEvent(new Event('input'));
		});
	});
}

export function checkInputErrors(input = {}, data = {}) {
	let error = null;
	const checkInput = () => {
		const { value, type, name } = input;
		const { required, minLength, maxLength } = data.rules || {};
		const {
			required: requiredMessage = translate('form.errorMessages.required'),
			minLength: minLengthMessage = translate('form.errorMessages.minLength', [minLength]),
			maxLength: maxLengthMessage = translate('form.errorMessages.maxLength', [maxLength])
		} = data.messages || {};

		if (
			type === 'radio' &&
			input.parentNode.querySelectorAll(`input[name=${name}]:checked`).length === 0
		)
			error = requiredMessage;
		else if (required && value.length === 0) error = requiredMessage;
		else if (minLength && value.length < minLength) error = minLengthMessage;
		else if (maxLength && value.length > maxLength) error = maxLengthMessage;
		else error = null;

		if (input.tested) {
			input.classList.toggle('error', error);
			input.classList.toggle('success', !error);
			input.dispatchEvent(new CustomEvent('checked', { detail: error }));
		}
	};

	input.addEventListener('input', checkInput);
	input.addEventListener('change', checkInput);
	input.addEventListener('blur', checkInput);
}
