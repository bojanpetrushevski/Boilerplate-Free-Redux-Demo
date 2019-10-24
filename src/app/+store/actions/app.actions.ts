import { ActionStandard, setPrefix } from 'flux-action-class';

setPrefix('');

export class SetTitle extends ActionStandard<string> { }
