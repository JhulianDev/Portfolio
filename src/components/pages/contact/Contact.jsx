import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import useFormHandler from '../../../hooks/useFormHandler';
import { Light, MaxWidth, Section } from '../../general/styles/generalStyles';
import { AstronautImg, BoxImg, ButtonForm, CardContact, Form, Input, StarsImg, TextArea, TitleSection } from './ContactStyles';
import ASTRONAUT_CONTACT from "../../../assets/svg/AstronautContact.svg"
import STARS_A from "../../../assets/svg/Stars-1.svg"
import STARS_B from "../../../assets/svg/Stars-2.svg"
import STARS_C from "../../../assets/svg/Stars-3.svg"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", country: "", subject: "", message: "" });
  const [state, handleSubmit] = useForm("xrgwjgww");
  const { formHandler, submittedForm } = useFormHandler();

  useEffect(() => {
    if (state.succeeded) {
      submittedForm(setFormData);
    }
  }, [state.succeeded]);

  return (
    <Section>
      <TitleSection>Contact me</TitleSection>
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

          <Form onSubmit={(e) => formHandler(e, formData, handleSubmit)} noValidate>
            <Light $size="200px" $bottom $blue />
            <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <Input type="text" name="country" placeholder="Country" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
            <Input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
            <TextArea name='message' placeholder='Message' value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <ButtonForm type="submit" disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send'}
            </ButtonForm>
          </Form>

          <Light $size="200px" $bottom $left $purple $opacity=".7" />
        </CardContact>

      </MaxWidth>
    </Section>
  );
};

export default Contact;