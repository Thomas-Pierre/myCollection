import { translate } from './translate';

/**
 * Return an error message if input is not correct
 * @param {HTMLFormElement|Object} input
 * @param {FormRules|Object} rules
 * @param {FormRulesMessages|Object} messages
 * @returns
 */
export function checkInputError(input = {}, rules = {}, messages = {}) {
	const { value } = input;
	const { required, minLength, maxLength } = rules;
	const {
		required: requiredMessage = translate('form.errorMessages.required'),
		minLength: minLengthMessage = translate('form.errorMessages.minLength', [minLength]),
		maxLength: maxLengthMessage = translate('form.errorMessages.maxLength', [maxLength])
	} = messages;

	if (required && value.length === 0) return requiredMessage;
	if (minLength && value.length < minLength) return minLengthMessage;
	if (maxLength && value.length > maxLength) return maxLengthMessage;

	return false;
}
