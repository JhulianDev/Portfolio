import React, { useContext, useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import useFormHandler from '../../../hooks/useFormHandler';
import { Light, MaxWidth, Section } from '../../general/styles/generalStyles';
import { AstronautImg, BoxImg, ButtonForm, CardContact, Form, Input, StarsImg, TextArea, TitleSection } from './ContactStyles';
import ASTRONAUT_CONTACT from "../../../assets/svg/AstronautContact.svg"
import STARS_A from "../../../assets/svg/Stars-1.svg"
import STARS_B from "../../../assets/svg/Stars-2.svg"
import STARS_C from "../../../assets/svg/Stars-3.svg"
import { RefContext } from '../../../context/RefContext';
import { LanguageContext } from '../../../context/LanguageContext';

const Contact = () => {
  const { contactRef } = useContext(RefContext)
  const { texts } = useContext(LanguageContext)
  const t = texts.contactMe
  const [formData, setFormData] = useState({ name: "", email: "", country: "", subject: "", message: "" });
  const [state, handleSubmit] = useForm("xrgwjgww");
  const { formHandler, submittedForm } = useFormHandler();

  useEffect(() => {
    if (state.succeeded) {
      submittedForm(setFormData);
    }
  }, [state.succeeded]);

  return (
    <Section ref={contactRef}>
      <TitleSection>{t.titleSection}</TitleSection>
      <Light $size="550px" $top $right $blue />
      <Light $size="550px" $bottom $left $turquoise $opacity=".8" />
      <MaxWidth $justify="center">

        <CardContact>
          <Light $size="200px" $top $right $turquoise $opacity=".7" />

          <BoxImg>
            <AstronautImg src={ASTRONAUT_CONTACT} alt='Astronaut Illustration' />
            <StarsImg src={STARS_A} alt='Stars Illustration' $delay="1s" />
            <StarsImg src={STARS_B} alt='Stars Illustration' $delay="3s" />
            <StarsImg src={STARS_C} alt='Stars Illustration' $delay="5s" />
            <Light $size="200px" $turquoise />
          </BoxImg>

          <Form onSubmit={(e) => formHandler(e, formData, handleSubmit, t)} noValidate>
            <Light $size="200px" $bottom $blue />
            <Input type="text" name="name" placeholder={t.name} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <Input type="email" name="email" placeholder={t.email} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <Input type="text" name="country" placeholder={t.country} value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
            <Input type="text" name="subject" placeholder={t.subject} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
            <TextArea name='message' placeholder={t.message} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <ButtonForm type="submit" disabled={state.submitting}>
              {state.submitting ? `${t.sending}` : `${t.send}`}
            </ButtonForm>
          </Form>

          <Light $size="200px" $bottom $left $purple $opacity=".7" />
        </CardContact>

      </MaxWidth>
    </Section>
  );
};

export default Contact;