// login_info_page.dart

import 'package:flutter/material.dart';

class LoginInfoPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login Info'),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // User's Profile Picture in a Circle
              CircleAvatar(
                radius: 60,
                backgroundImage: AssetImage('assets/images/profile_picture.jpeg'), // Replace with the actual path or URL of the profile picture
              ),
              SizedBox(height: 16.0),

              // User's Name
              Text(
                'User Name',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),

              // User's Mobile Number
              Text(
                'Mobile Number: +1234567890', // Replace with the actual mobile number
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 8.0),

              // User's Address
              Text(
                'Address: 123 Main Street, City, Country', // Replace with the actual address
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 8.0),

              // User's Email ID
              Text(
                'Email ID: user@example.com', // Replace with the actual email ID
                style: TextStyle(fontSize: 16),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

