import React from 'react';
import { InputRadio } from '../input-radio/input-radio.component';
import { InputRadioProps } from '../../../comparison/interfaces/filter.interface';

export const TimePerMonthCheckboxes: React.FC<Partial<InputRadioProps>> = props => {
  return (
    <>
      <h2>Зможу осилити час догляду</h2>
      <section className="checkboxes form_radio_group">
        <InputRadio id="radio-1" name="timePerMonth" lable="Низьку" value="low" refAttribute={props.refAttribute} />

        <InputRadio
          id="radio-2"
          name="timePerMonth"
          lable="Середню"
          value="averege"
          refAttribute={props.refAttribute}
        />

        <InputRadio id="radio-3" name="timePerMonth" lable="Високу" value="high" refAttribute={props.refAttribute} />

        <InputRadio id="radio-4" name="timePerMonth" lable="Будь-яку" value="any" refAttribute={props.refAttribute} />
      </section>
    </>
  );
};