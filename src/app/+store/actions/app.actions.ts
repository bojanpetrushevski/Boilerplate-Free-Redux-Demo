import { ActionStandard, setPrefix } from 'flux-action-class';

setPrefix('');

export class SetAppName extends ActionStandard<string> { }
