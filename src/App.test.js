import { render, screen } from '@testing-library/react';
import App from './App';
import ContactForm from './contactForm/ContactForm'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test ('renders form label for name',()=>{
  render(<ContactForm />);
  const labelname=screen.getByText(/Your name/);
  expect(labelname).toBeInTheDocument();
  // screen.debug();
})

test ('renders form label for subject',()=>{
  render(<ContactForm />);
  const labelsubject=screen.getByText(/Subject/);
  expect(labelsubject).toBeInTheDocument();
  // screen.debug();
})

test ('renders form label for your email',()=>{
  render(<ContactForm />);
  const labelemail=screen.getByText(/Your email/);
  expect(labelemail).toBeInTheDocument();
  // screen.debug();
})

test ('renders form label for your message',()=>{
  render(<ContactForm />);
  const labelmessage=screen.getByText(/Your message/);
  expect(labelmessage).toBeInTheDocument();
  // screen.debug();
})

test('submit button exists',()=>{
  render(<ContactForm />);
  const submitmessage=screen.getByText(/Send Message/);
  expect(submitmessage).toBeInTheDocument();

})
