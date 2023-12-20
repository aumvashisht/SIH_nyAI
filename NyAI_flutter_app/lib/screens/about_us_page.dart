// about_us_page.dart

import 'package:flutter/material.dart';

class AboutUsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Image.asset('assets/images/CCLogo.png', width: 400, height: 150),
                ),
              // Introduction
              Text(
                'Welcome to nyAI, where legal simplicity meets technological innovation. We are Courtroom Cartel, proud grand finalists of the esteemed Smart India Hackathon 2023 (SIH 2023).',
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 16.0),
              Text(
                'Meet Our Team:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
              Text(
                'Team Leader: Alankar Dutta\nLeading the charge with a vision for accessible legal solutions.',
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 8.0),
              Text(
                'Team Members:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('1. Aum Vashisht'),
                  Text('2. Shruti Singh'),
                  Text('3. Sidharth Bhardwaj'),
                  Text('4. Pallavi Sinha'),
                  Text('5. Vedant Arora'),
                ],
              ),
              SizedBox(height: 16.0),
              Text(
                'All six of us hail from Maharaja Surajmal Institute of Technology (MSIT) in Janakpuri, New Delhi. Currently, we\'re in our third year, pursuing degrees in Electronics and Communication Engineering (ECE).',
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 16.0),
              Text(
                'Our Journey at SIH 2023:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
              Text(
                'As grand finalists at SIH 2023, we embarked on a mission to revolutionize legal documentation for individuals and small businesses in India.',
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 16.0),
              Text(
                'The Birth of nyAI:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
              Text(
                'Inspired by the challenges faced by many in navigating legal complexities, we conceptualized nyAI to empower users through simplified legal solutions.',
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 16.0),
              Text(
                'Technology Stack:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
              Text(
                '- Model: Python, Hugging Face\n- Website Backend: NodeJS, ExpressJS\n- Website Frontend: HTML, CSS, Tailwind, React\n- Mobile Application: Flutter, Dart, Swift\n- Database Services: MongoDB, Mongoose, Firebase',
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 16.0),
              Text(
                'Our Approach:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('- We leverage advanced technologies like Python and Hugging Face to power our AI model, ensuring accuracy and efficiency.'),
                  Text('- The website\'s dynamic and responsive design is crafted using NodeJS, ExpressJS, HTML, CSS, Tailwind, and React.'),
                  Text('- Our mobile application, developed with Flutter and Dart, offers a seamless experience across devices.'),
                  Text('- Backend data services are supported by MongoDB, Mongoose, and Firebase, guaranteeing robust and secure operations.'),
                ],
              ),
              SizedBox(height: 16.0),
              Text(
                'Our Commitment:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
              Text(
                'At Courtroom Cartel, we are committed to simplifying legal processes through technology, making legal resources accessible to all. nyAI is our testament to the belief that legal solutions should be clear, efficient, and within reach.',
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 16.0),
              Text(
                'Join us on this transformative journey at nyAI, where we bring law and technology together for a brighter legal future.',
                style: TextStyle(fontSize: 16),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
