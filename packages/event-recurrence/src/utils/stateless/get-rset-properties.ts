import { AugmentedEvent } from '../../types/augmented-event.interface'
import { EventRRuleOptions } from '../../types/event-rrule-options'

export const getRRule = (
  calendarEvent: AugmentedEvent
): EventRRuleOptions | undefined => {
  return calendarEvent._getForeignProperties()?.rrule as
    | EventRRuleOptions
    | undefined
}

export const getExDate = (
  calendarEvent: AugmentedEvent
): Date[] | undefined => {
  return calendarEvent._getForeignProperties()?.exdate as Date[] | undefined
}
