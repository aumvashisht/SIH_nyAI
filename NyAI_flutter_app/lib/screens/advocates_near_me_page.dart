// import 'package:flutter/material.dart';
// import 'dart:convert';
// import 'package:http/http.dart' as http;
// import 'package:geolocator/geolocator.dart';
// import 'package:permission_handler/permission_handler.dart';

// class MyApp extends StatefulWidget {
//   @override
//   _MyAppState createState() => _MyAppState();
// }

// class _MyAppState extends State<MyApp> {
//   final serpApiService = SerpApiService(
//       "864a5713ad57551857b1776af86f36fd1bc44c093f680cfbb475e0b1e944901c");

//   Position? _currentPosition;

//   @override
//   void initState() {
//     super.initState();
//     _requestLocationPermission();
//   }

//   Future<void> _requestLocationPermission() async {
//     if (await Permission.location.request().isGranted) {
//       // Permission is granted, you can now call the location-related code
//       _getCurrentLocation();
//     } else {
//       // Permission is not granted
//       // Handle the case where the user denies permission
//       print('Location permission denied');
//     }
//   }

//   Future<void> _getCurrentLocation() async {
//     try {
//       Position position = await Geolocator.getCurrentPosition(
//           desiredAccuracy: LocationAccuracy.best);
//       setState(() {
//         _currentPosition = position;
//       });
//     } catch (e) {
//       print('Error getting location: $e');
//     }
//   }

//   Future<Map<String, dynamic>> _getNearbyLawyers() async {
//     if (_currentPosition == null) {
//       return Future.error('Location not available');
//     }

//     final locationParam =
//         '${_currentPosition!.latitude},${_currentPosition!.longitude}';
//     final url =
//         'https://serpapi.com/search.json?q=nearby+lawyers&location=$locationParam&api_key=${serpApiService.apiKey}';

//     try {
//       final response = await http.get(Uri.parse(url));

//       if (response.statusCode == 200) {
//         return json.decode(response.body);
//       } else {
//         print(
//             'Failed to load nearby lawyers. Status code: ${response.statusCode}, Body: ${response.body}');
//         throw Exception('Failed to load nearby lawyers');
//       }
//     } catch (e) {
//       print('Exception during API request: $e');
//       throw Exception('Failed to load nearby lawyers');
//     }
//   }

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       home: Scaffold(
//         appBar: AppBar(
//           title: const Text('Nearby Lawyers'),
//         ),
//         body: FutureBuilder(
//           future: _getNearbyLawyers(),
//           builder: (context, snapshot) {
//             if (snapshot.connectionState == ConnectionState.waiting) {
//               return Center(child: CircularProgressIndicator());
//             } else if (snapshot.hasError) {
//               return Center(child: Text('Error: ${snapshot.error}'));
//             } else {
//               final lawyers = snapshot.data?['organic_results'];

//               return ListView.builder(
//                 itemCount: lawyers.length,
//                 itemBuilder: (context, index) {
//                   final lawyer = lawyers[index];
//                   final name = lawyer['title'];
//                   final address = lawyer['address'];
//                   final rating = lawyer['rating'] ?? 'N/A';
//                   final phone = lawyer['phone_numbers']?.isNotEmpty ?? false
//                       ? lawyer['phone_numbers'][0]
//                       : 'N/A';

//                   return Card(
//                     child: ListTile(
//                       title: Text(name),
//                       subtitle: Column(
//                         crossAxisAlignment: CrossAxisAlignment.start,
//                         children: [
//                           Text('Address: $address'),
//                           Text('Rating: $rating'),
//                           Text('Phone: $phone'),
//                         ],
//                       ),
//                     ),
//                   );
//                 },
//               );
//             }
//           },
//         ),
//       ),
//     );
//   }
// }

// void main() {
//   runApp(MyApp());
// }

// class SerpApiService {
//   final String apiKey;

//   SerpApiService(this.apiKey);
// }