import React, { Component } from 'react';
import { state } from 'components/App';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackContainer } from './Feedback.styled';

export class Feedback extends Component {
  state = state;

  handleFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage() {
    return Number(
      ((this.state.good / this.countTotalFeedback()) * 100 || 0).toFixed(0)
    );
  }

  render() {
    return (
      <FeedbackContainer>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={'Statistic'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </FeedbackContainer>
    );
  }
}
