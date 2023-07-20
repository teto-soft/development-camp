import type { ConfigType, Dayjs } from 'dayjs';
import dayjs from 'dayjs';

type TemplateType =
  | 'YYYYMMDDHHmmss'
  | 'YYYY/MM/DD\nHH:mm:ss'
  | 'YYYY/MM/DD'
  | 'YYYY/MM'
  | 'YYYY年M月D日'
  | 'M月D日 HH:mm'
  | 'YYYY-MM-DD';

export class Day {
  private _day: Dayjs;

  constructor(date?: ConfigType) {
    this._day = dayjs(date);
  }

  public format(template?: TemplateType) {
    return this._day.format(template);
  }

  public date() {
    return this._day.date();
  }
}
