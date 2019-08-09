import { LiuUIComponent, LiuUIComponentSize } from './component'

export type RadioGroupSize = 'large' | 'small'

export declare class LiuRadioGroup extends LiuUIComponent {
  value: string | number

  size: LiuUIComponentSize

  fill: string

  disabled: boolean

  textColor: string
}
