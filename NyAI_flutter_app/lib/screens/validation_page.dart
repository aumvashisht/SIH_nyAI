import 'package:flutter/material.dart';

class ValidationPage extends StatefulWidget {
  @override
  _ValidationPageState createState() => _ValidationPageState();
}

class _ValidationPageState extends State<ValidationPage> {
  TextEditingController panController = TextEditingController();
  bool isValid = true;

  void validatePan() {
    // Define the PAN pattern
    RegExp panPattern = RegExp(r'^[A-Z]{5}\d{4}[A-Z]$');

    // Check if the provided PAN matches the pattern
    setState(() {
      isValid = panPattern.hasMatch(panController.text);
    });

    if (isValid) {
      Navigator.pushReplacementNamed(context, '/home');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('PAN Number for Validation'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: panController,
              decoration: InputDecoration(labelText: 'Enter PAN Number'),
            ),
            SizedBox(height: 16.0),
            ElevatedButton(
              onPressed: validatePan,
              child: Text('Validate PAN'),
            ),
            SizedBox(height: 16.0),
            if (!isValid)
              Container(
                color: Colors.red,
                padding: EdgeInsets.all(16.0),
                child: Text(
                  'Invalid PAN Number',
                  style: TextStyle(color: Colors.white),
                ),
              ),
          ],
        ),
      ),
    );
  }
}