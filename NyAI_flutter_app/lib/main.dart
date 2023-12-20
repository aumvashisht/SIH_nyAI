// main.dart

import 'package:flutter/material.dart';
import 'package:nyai/screens/about_us_page.dart';
//import 'package:nyai/screens/folder_page.dart';
import 'package:nyai/screens/home_screen.dart';
import 'package:nyai/screens/login_info_page.dart';
//import 'package:nyai/screens/login_screen.dart';
import 'package:nyai/screens/settings_page.dart';
import 'package:nyai/screens/splash_screen.dart';
import 'package:nyai/screens/validation_page.dart';
import 'package:nyai/screens/chat_page.dart'; // Import the ChatPage class

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'NyAI',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      
      home: SplashScreen(),
      routes: {
      //'/login': (context) => LoginPage(),
        '/home': (context) => HomePage(),
        //'/drafting_page': (context) => DraftingPage(),
        //'/simplifier_page': (context) => SimplifierPage(),
        //'/summarizer_page': (context) => SummarizerPage(),
        '/about_us_page': (context) => AboutUsPage(),
        '/login_info_page': (context) => LoginInfoPage(),
        //'/advocates_near_me_page': (context) => AdvocatesNearMePage(),
        '/chat_page': (context) => ChatPage(), 
        //'/folder_page': (context) => FolderPage(),
        '/settings_page': (context) => SettingsPage(),
        '/validation_page': (context) => ValidationPage(), // Include the SettingsPage route// Add the ChatPage route
      },
    );
  }
}
