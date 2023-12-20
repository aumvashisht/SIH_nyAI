// common/bottom_navigation_bar.dart

import 'package:flutter/material.dart';

class MyBottomNavigationBar extends StatelessWidget {
  final int currentIndex;
  final void Function(int) onTap;

  MyBottomNavigationBar({required this.currentIndex, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      items: [
        BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home', backgroundColor: Colors.green),
        BottomNavigationBarItem(icon: Icon(Icons.folder), label: 'Folder', backgroundColor: Colors.green),
        BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile', backgroundColor: Colors.green),
        BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat', backgroundColor: Colors.green),
        BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings', backgroundColor: Colors.green),
      ],
      currentIndex: currentIndex,
      onTap: onTap,
    );
  }
}
