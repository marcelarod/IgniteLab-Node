import { Content } from "./notification-content"

describe('Notification content', () => {

  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solitação de amizade')
    expect(content).toBeTruthy();  // toBeTruthy = In JavaScript, there are six falsy values: false, 0, '', null, undefined, and NaN. Everything else is truthy
  })

  it('should be not able to create a notification content with less than 5 characters ', () => {
    expect(() => new Content('Voc')).toThrow();
  })

  it('should be not able to create a notification content with more than 250 characters ', () => {
    expect(() => new Content('a'.repeat(250))).toThrow();
  })
})
