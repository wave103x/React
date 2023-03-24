import React, { Component, createRef } from 'react';

import styles from './Form.module.scss';

import { CardFormState } from '../../Types/CardFormProps';

export class Form extends Component<
  { setStateCard: (data: CardFormState) => void },
  { checkBoxError?: boolean }
> {
  private nameRef: React.RefObject<HTMLInputElement>;
  private wordRef: React.RefObject<HTMLInputElement>;
  private dateRef: React.RefObject<HTMLInputElement>;
  private fileRef: React.RefObject<HTMLInputElement>;
  private fakeYes: React.RefObject<HTMLInputElement>;
  private fakePartly: React.RefObject<HTMLInputElement>;
  private feelSad: React.RefObject<HTMLInputElement>;
  private feelShame: React.RefObject<HTMLInputElement>;
  private feelJoy: React.RefObject<HTMLInputElement>;
  private feelCurious: React.RefObject<HTMLInputElement>;
  private feelAngry: React.RefObject<HTMLInputElement>;
  private whoHeard: React.RefObject<HTMLSelectElement>;

  constructor(props: { setStateCard: (data: CardFormState) => void }) {
    super(props);
    this.nameRef = createRef();
    this.wordRef = createRef();
    this.dateRef = createRef();
    this.fileRef = createRef();
    this.fakeYes = createRef();
    this.fakePartly = createRef();
    this.feelSad = createRef();
    this.feelShame = createRef();
    this.feelJoy = createRef();
    this.feelCurious = createRef();
    this.feelAngry = createRef();
    this.whoHeard = createRef();
    this.state = {
      checkBoxError: false,
    };
  }

  handleForm(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const feelings = [this.feelAngry, this.feelCurious, this.feelJoy, this.feelSad, this.feelShame]
      .map((elem) => {
        if (elem.current?.checked) return elem.current.value;
      })
      .filter((elem) => elem);
    const values = {
      name: this.nameRef.current?.value,
      word: this.wordRef.current?.value,
      date: new Date(Date.parse(this.dateRef.current?.value as string)),
      heard: this.whoHeard.current?.value || 'mom',
      feelings: feelings,
      faked: this.fakeYes.current?.checked || false,
      photo: this.fileRef.current?.files?.item(0) || false,
    };
    this.props.setStateCard(values);
    if (event.target instanceof HTMLFormElement) event.target.reset();
  }

  render() {
    return (
      <form className={styles.form} role="add-card" onSubmit={this.handleForm.bind(this)}>
        <label>
          Your name
          <input
            ref={this.nameRef}
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
          <select ref={this.whoHeard} defaultValue="nobody" name="who heard" id="select">
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
              <input ref={this.fakeYes} type="radio" name="have faked" value="yes" />
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
          <input type="checkbox" required={true} />I am confident in my answers
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
