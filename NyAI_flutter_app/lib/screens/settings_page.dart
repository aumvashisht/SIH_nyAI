import 'package:flutter/material.dart';

class SettingsPage extends StatelessWidget {
  bool isDarkMode = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Settings'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'General Settings',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 16.0),
            buildSettingItem(
              'Dark Mode',
              Switch(
                value: false, // Replace with your dark mode status
                onChanged: (value) {
                  // Add logic to handle dark mode change
                  // For example, you can use a provider to update the theme
                  // and save the preference to persistent storage
                },
              ),
            ),
            buildSettingItem(
              'Notifications',
              Switch(
                value: true, // Replace with your notification status
                onChanged: (value) {
                  // Add logic to handle notification change
                },
              ),
            ),
            buildSettingItem('Language', Text('English')),
            Divider(),
            Text(
              'Account Settings',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 16.0),
            buildSettingItem(
              'Change Password',
              Icon(Icons.lock),
              onTap: () {
                // Handle the tap for 'Change Password'
                // You can navigate to the change password page
                // For example: Navigator.pushNamed(context, '/change_password');
              },
            ),
            buildSettingItem(
              'Logout',
              Icon(Icons.exit_to_app),
              onTap: () {
                // Handle the tap for 'Logout'
                // For example: Navigator.pushReplacementNamed(context, '/login');
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget buildSettingItem(String title, Widget trailing, {VoidCallback? onTap}) {
    return ListTile(
      title: Text(title),
      trailing: trailing,
      onTap: onTap,
    );
  }
}
