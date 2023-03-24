import React, { Component, createRef } from 'react';

import styles from './Form.module.scss';

import { CardFormState } from '../../Types/CardFormProps';

export class Form extends Component<
  { setStateCard: (data: CardFormState) => void },
  { checkBoxError?: boolean; nameError?: boolean }
> {
  private nameRef: React.RefObject<HTMLInputElement> = createRef();
  private wordRef: React.RefObject<HTMLInputElement> = createRef();
  private dateRef: React.RefObject<HTMLInputElement> = createRef();
  private fileRef: React.RefObject<HTMLInputElement> = createRef();
  private fakeYes: React.RefObject<HTMLInputElement> = createRef();
  private fakePartly: React.RefObject<HTMLInputElement> = createRef();
  private feelSad: React.RefObject<HTMLInputElement> = createRef();
  private feelShame: React.RefObject<HTMLInputElement> = createRef();
  private feelJoy: React.RefObject<HTMLInputElement> = createRef();
  private feelCurious: React.RefObject<HTMLInputElement> = createRef();
  private feelAngry: React.RefObject<HTMLInputElement> = createRef();
  private whoHeard: React.RefObject<HTMLSelectElement> = createRef();

  constructor(props: { setStateCard: (data: CardFormState) => void }) {
    super(props);
    this.state = {
      checkBoxError: false,
      nameError: false,
    };
  }

  createCardValues() {
    const feelings = [this.feelAngry, this.feelCurious, this.feelJoy, this.feelSad, this.feelShame]
      .map((elem) => {
        if (elem.current?.checked) return elem.current.value;
      })
      .filter((elem) => elem);

    return {
      name: this.nameRef.current?.value,
      word: this.wordRef.current?.value,
      date: new Date(Date.parse(this.dateRef.current?.value as string)),
      heard: this.whoHeard.current?.value || 'mom',
      feelings: feelings,
      faked: this.fakeYes.current?.checked || false,
      photo: this.fileRef.current?.files?.item(0) || false,
    };
  }

  handleForm(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const values = this.createCardValues();

    this.props.setStateCard(values);
    form.reset();
  }

  render() {
    return (
      <form className={styles.form} role="add-card" onSubmit={this.handleForm.bind(this)}>
        <label>
          Your name
          <input
            ref={this.nameRef}
            minLength={3}
            required={true}
            type="text"
            name="name"
            pattern="^[A-Z]+[a-zA-Z]*$"
          />
        </label>
        <label>
          Your first word in the life
          <input ref={this.wordRef} type="text" name="word" required={true} />
        </label>
        <label>
          When was it
          <input
            ref={this.dateRef}
            type="date"
            name="date"
            min="1980-01-01"
            max="2015-01-01"
            required={true}
          />
        </label>
        <label>
          Who heard it
          <select ref={this.whoHeard} name="who heard" id="select" required={true}>
            <option value="mom">Mom</option>
            <option value="dad">Dad</option>
            <option value="nobody">Nobody</option>
          </select>
        </label>
        <label className={styles.boxes}>
          What was your feelings
          <label>
            <input ref={this.feelShame} type="checkbox" name="feelings" value="shame" /> Shame
          </label>
          <label>
            <input ref={this.feelJoy} type="checkbox" name="feelings" value="joy" /> Joy
          </label>
          <label>
            <input ref={this.feelSad} type="checkbox" name="feelings" value="sad" /> Sad
          </label>
          <label>
            <input ref={this.feelCurious} type="checkbox" name="feelings" value="curious" /> Curious
          </label>
          <label>
            <input ref={this.feelAngry} type="checkbox" name="feelings" value="angry" />
            &nbsp;Angry af
          </label>
          {this.state.checkBoxError && <p>Min one to choose</p>}
        </label>
        <label>
          Attach proof of your words
          <input
            ref={this.fileRef}
            type="file"
            name="photo"
            accept="image/png, image/gif, image/jpeg"
            required={true}
          />
        </label>
        <label className={styles.boxes}>
          Have you faked all passed info
          <div>
            <label>
              <input
                ref={this.fakeYes}
                type="radio"
                name="have faked"
                value="yes"
                required={true}
              />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input ref={this.fakePartly} type="radio" name="have faked" value="partly" />
              Partly
            </label>
          </div>
        </label>
        <label className={styles.confident}>
          <input type="checkbox" required={true} name="confirm" />I am confident in my answers
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
