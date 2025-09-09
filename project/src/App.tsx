import React, { useState } from 'react';
import { Button, Input, Modal, Card } from './components';
import { Search, Mail, Lock, Heart, MessageCircle } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl floating-animation"></div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Component Library Showcase
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A comprehensive collection of reusable React components built with TypeScript, 
            Styled Components, and modern accessibility practices.
          </p>
        </div>

        {/* Button Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Button Components</h2>
          
          <Card>
            <Card.Header>
              <Card.Title>Button Variants</Card.Title>
              <Card.Subtitle>Different styles for various use cases</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>Button Sizes & States</Card.Title>
              <Card.Subtitle>Different sizes and interactive states</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button loading>Loading...</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width Button</Button>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Input Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Input Components</h2>
          
          <Card>
            <Card.Header>
              <Card.Title>Form Example</Card.Title>
              <Card.Subtitle>Inputs with validation and icons</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                <Input
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                  placeholder="Enter your email"
                  startIcon={<Mail size={16} />}
                  fullWidth
                />
                
                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  helperText="Password must be at least 8 characters"
                  endIcon={<Lock size={16} />}
                  fullWidth
                />
                
                <Input
                  placeholder="Search..."
                  startIcon={<Search size={16} />}
                  fullWidth
                />

                <Button type="submit" fullWidth>
                  Submit Form
                </Button>
              </form>
            </Card.Content>
          </Card>
        </section>

        {/* Modal Example */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">Modal Components</h2>
          
          <Card>
            <Card.Header>
              <Card.Title>Interactive Modal</Card.Title>
              <Card.Subtitle>Accessible modal with focus management</Card.Subtitle>
            </Card.Header>
            <Card.Content>
              <div className="space-y-4">
                <p>Click the button below to open a modal dialog with form content.</p>
                <Button onClick={() => setIsModalOpen(true)}>
                  Open Contact Modal
                </Button>
              </div>
            </Card.Content>
          </Card>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Get in Touch"
            size="md"
          >
            <div className="space-y-6">
              <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  fullWidth
                />
                
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email address"
                  startIcon={<Mail size={16} />}
                  fullWidth
                />
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or inquiry"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => {
                    alert('Message sent!');
                    setIsModalOpen(false);
                  }}>
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </Modal>
        </section>

        {/* Card Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Card Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default" hoverable>
              <Card.Header>
                <Card.Title>Default Card</Card.Title>
                <Card.Subtitle>Hoverable with shadow</Card.Subtitle>
              </Card.Header>
              <Card.Content>
                <p>This card uses the default styling with hover effects for better interactivity.</p>
              </Card.Content>
            </Card>

            <Card variant="outlined" clickable onClick={() => alert('Card clicked!')}>
              <Card.Header>
                <Card.Title>Clickable Card</Card.Title>
                <Card.Subtitle>Click me to interact</Card.Subtitle>
              </Card.Header>
              <Card.Content>
                <p>This entire card is clickable and includes keyboard navigation support.</p>
              </Card.Content>
            </Card>

            <Card variant="elevated">
              <Card.Header>
                <Card.Title>Elevated Card</Card.Title>
                <Card.Subtitle>Floating appearance</Card.Subtitle>
              </Card.Header>
              <Card.Content>
                <p>This card appears to float above the page with an elevated shadow.</p>
              </Card.Content>
            </Card>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <Card variant="elevated" padding="lg">
              <Card.Header>
                <Card.Title>Blog Post Example</Card.Title>
                <Card.Subtitle>Published on March 15, 2024 • 5 min read</Card.Subtitle>
              </Card.Header>
              <Card.Content>
                <p>
                  Learn how to build scalable React applications using modern component libraries 
                  and design systems. We'll cover everything from basic setup to advanced patterns.
                </p>
                <p className="text-gray-600 text-sm mt-4">
                  Topics covered: Component architecture, TypeScript integration, testing strategies, 
                  and accessibility best practices.
                </p>
              </Card.Content>
              <Card.Footer>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart size={16} />
                      <span className="text-sm">24</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle size={16} />
                      <span className="text-sm">8</span>
                    </button>
                  </div>
                  <Button size="sm">Read More</Button>
                </div>
              </Card.Footer>
            </Card>

            <Card variant="default" hoverable>
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6 flex items-center justify-center text-white font-semibold">
                Product Image
              </div>
              <Card.Header>
                <Card.Title>Premium Component Library</Card.Title>
                <Card.Subtitle>Professional React components</Card.Subtitle>
              </Card.Header>
              <Card.Content>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-500 line-through">$79</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    38% OFF
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  A comprehensive collection of production-ready React components with TypeScript 
                  support, comprehensive testing, and Storybook documentation.
                </p>
              </Card.Content>
              <Card.Footer>
                <div className="flex gap-3">
                  <Button fullWidth>Add to Cart</Button>
                  <Button variant="outline">♡</Button>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-12 border-t border-gradient-to-r from-indigo-200 via-purple-200 to-cyan-200 bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-cyan-50/50 rounded-2xl backdrop-blur-sm">
          <p className="text-gray-700 font-medium">
            Built with React, TypeScript, Styled Components, and ❤️
          </p>
          <p className="text-sm text-gray-600 mt-2">
            All components are fully tested, accessible, and production-ready
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;