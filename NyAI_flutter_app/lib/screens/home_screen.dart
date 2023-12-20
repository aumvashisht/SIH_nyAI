// // screens/home_page.dart

// import 'package:flutter/material.dart';
// import 'package:carousel_slider/carousel_slider.dart';

// class HomePage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         actions: [
//           IconButton(
//             icon: Icon(Icons.exit_to_app),
//             color: Colors.blue.shade400,
//             onPressed: () {
//               // Replace this with your logout logic
//               Navigator.pushReplacementNamed(context, '/login');
//             },
//           ),
//         ],
//       ),
//       body: SingleChildScrollView(
//         child: Column(
//           crossAxisAlignment: CrossAxisAlignment.center,
//           children: [
//             Padding(
//                   padding: const EdgeInsets.all(16.0),
//                   child: Image.asset('assets/images/NyAI Logo.png', width: 300, height: 100),
//                 ),
//             // Row for Logos
//             Row(
//               mainAxisAlignment: MainAxisAlignment.center,
//               children: [
//                 Padding(
//                   padding: const EdgeInsets.all(16.0),
//                   child: Image.asset('assets/images/azadi .png', width: 120, height: 80),
//                 ),
                
//                 Padding(
//                   padding: const EdgeInsets.all(16.0),
//                   child: Image.asset('assets/images/Ministry_of_Law_and_Justice_Logo.png', width: 120, height: 80),
//                 ),
//               ],
//             ),

//             // Slideshow of Images
//             CarouselSlider.builder(
//               itemCount: 3,
//               itemBuilder: (BuildContext context, int index, int realIndex) {
//                 return Image.asset(
//                   'assets/images/slide${index + 1}.png',
//                   fit: BoxFit.cover,
//                 );
//               },
//               options: CarouselOptions(
//                 height: 300.0,
//                 enlargeCenterPage: true,
//                 autoPlay: true,
//                 aspectRatio: 16 / 9,
//                 autoPlayCurve: Curves.fastOutSlowIn,
//                 enableInfiniteScroll: true,
//                 autoPlayAnimationDuration: Duration(milliseconds: 800),
//                 viewportFraction: 0.8,
//               ),
//             ),

//             // Cards
//             Padding(
//               padding: const EdgeInsets.all(16.0),
//               child: Column(
//                 children: [
//                   buildCard('Drafting ', () {
//                     // Handle tap for Card 1
//                     Navigator.pushNamed(context, '/drafting_page');
//                   }),
//                   buildCard('Simplifier', () {
//                     // Handle tap for Card 2
//                     Navigator.pushNamed(context, '/simplifier_page');
//                   }),
//                   buildCard('Summarizer', () {
//                     // Handle tap for Card 3
//                     Navigator.pushNamed(context, '/summarizer_page');
//                   }),
//                   buildCard('About Us', () {
//                     // Handle tap for Card 4
//                     Navigator.pushNamed(context, '/about_us_page');
//                   }),
//                   buildCard('Login Info', () {
//                     // Handle tap for Card 5
//                     Navigator.pushNamed(context, '/login_info_page');
//                   }),
//                   buildCard('Advocates Near Me', () {
//                     // Handle tap for Card 6
//                     Navigator.pushNamed(context, '/advocates_near_me_page');
//                   }),
//                 ],
//               ),
//             ),
//           ],
//         ),
//       ),
//       bottomNavigationBar: BottomNavigationBar(
//         items: [
//           BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home', backgroundColor: Colors.green),
//           BottomNavigationBarItem(icon: Icon(Icons.folder), label: 'Folder', backgroundColor: Colors.green),
//           BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile', backgroundColor: Colors.green),
//           BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat', backgroundColor: Colors.green),
//           BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings', backgroundColor: Colors.green),
//         ],
//         currentIndex: 0,
//         onTap: (index) {
//           switch (index) {
//             case 0:
//               Navigator.pushReplacementNamed(context, '/home');
//               break;
//             case 1:
//               Navigator.pushNamed(context, '/folder_page');
//               break;
//             case 2:
//               Navigator.pushNamed(context, '/profile_page');
//               break;
//             case 3:
//               Navigator.pushNamed(context, '/chat_page');
//               break;
//             case 4:
//               Navigator.pushNamed(context, '/settings_page');
//               break;
//           }
//         },
//       ),
//     );
//   }

//   Widget buildCard(String title, VoidCallback onPressed) {
//     return Card(
//       elevation: 20.0,
//       child: InkWell(
//         onTap: onPressed,
//         child: Padding(
//           padding: const EdgeInsets.all(16.0),
//           child: Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: [
//               Text(
//                 title,
//                 style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
//               ),
//               SizedBox(height: 8.0),
              
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [
          IconButton(
            icon: Icon(Icons.exit_to_app),
            color: Colors.blue.shade400,
            onPressed: () {
              // Replace this with your logout logic
              Navigator.pushReplacementNamed(context, '/login');
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Image.asset('assets/images/NyAI Logo.png', width: 300, height: 100),
            ),
            // Row for Logos
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Image.asset('assets/images/azadi .png', width: 90, height: 80),
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Image.asset('assets/images/Ministry_of_Law_and_Justice_Logo.png', width: 90, height: 80),
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Image.asset('assets/images/digiIndialogo.png', width: 90, height: 80),
                ),
              ],
            ),

            // Slideshow of Images
            CarouselSlider.builder(
              itemCount: 3,
              itemBuilder: (BuildContext context, int index, int realIndex) {
                return Image.asset(
                  'assets/images/slide${index + 1}.png',
                  fit: BoxFit.cover,
                );
              },
              options: CarouselOptions(
                height: 300.0,
                enlargeCenterPage: true,
                autoPlay: true,
                aspectRatio: 16 / 9,
                autoPlayCurve: Curves.fastOutSlowIn,
                enableInfiniteScroll: true,
                autoPlayAnimationDuration: Duration(milliseconds: 800),
                viewportFraction: 0.8,
              ),
            ),

            // Cards in a Grid
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 16.0,
                mainAxisSpacing: 16.0,
                shrinkWrap: true,
                children: [
                  buildCard('Drafting', () {
                    Navigator.pushNamed(context, '/drafting_page');
                  }),
                  buildCard('Simplifier', () {
                    Navigator.pushNamed(context, '/simplifier_page');
                  }),
                  buildCard('Summarizer', () {
                    Navigator.pushNamed(context, '/summarizer_page');
                  }),
                  buildCard('About Us', () {
                    Navigator.pushNamed(context, '/about_us_page');
                  }),
                  buildCard('Login Info', () {
                    Navigator.pushNamed(context, '/login_info_page');
                  }),
                  buildCard('Advocates Near Me', () {
                    Navigator.pushNamed(context, '/advocates_near_me_page');
                  }),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home', backgroundColor: Colors.green),
          BottomNavigationBarItem(icon: Icon(Icons.folder), label: 'Folder', backgroundColor: Colors.green),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile', backgroundColor: Colors.green),
          BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat', backgroundColor: Colors.green),
          BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings', backgroundColor: Colors.green),
        ],
        currentIndex: 0,
        onTap: (index) {
          switch (index) {
            case 0:
              Navigator.pushReplacementNamed(context, '/home');
              break;
            case 1:
              Navigator.pushNamed(context, '/folder_page');
              break;
            case 2:
              Navigator.pushNamed(context, '/login_info_page');
              break;
            case 3:
              Navigator.pushNamed(context, '/chat_page');
              break;
            case 4:
              Navigator.pushNamed(context, '/settings_page');
              break;
          }
        },
      ),
    );
  }

  Widget buildCard(String title, VoidCallback onPressed) {
    return Card(
      elevation: 20.0,
      child: InkWell(
        onTap: onPressed,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                title,
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8.0),
            ],
          ),
        ),
      ),
    );
  }
}
