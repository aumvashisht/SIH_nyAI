// import 'dart:io';
// import 'package:flutter/material.dart';
// import 'package:file_picker/file_picker.dart';
// import 'package:path_provider/path_provider.dart';

// class FolderPage extends StatefulWidget {
//   @override
//   _FolderPageState createState() => _FolderPageState();
// }

// class _FolderPageState extends State<FolderPage> {
//   List<File> pdfFiles = [];

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Folder'),
//       ),
//       body: Column(
//         children: [
//           ElevatedButton(
//             onPressed: () async {
//               FilePickerResult? result = await FilePicker.platform.pickFiles(
//                 type: FileType.custom,
//                 allowedExtensions: ['pdf'],
//               );

//               if (result != null) {
//                 File file = File(result.files.single.path!);
//                 savePdf(file);
//               }
//             },
//             child: Text('Pick PDF'),
//           ),
//           SizedBox(height: 16.0),
//           Expanded(
//             child: ListView.builder(
//               itemCount: pdfFiles.length,
//               itemBuilder: (context, index) {
//                 return ListTile(
//                   title: Text(pdfFiles[index].path.split('/').last),
//                   onTap: () {
//                     // Handle tap on a PDF file (e.g., open it)
//                   },
//                 );
//               },
//             ),
//           ),
//         ],
//       ),
//     );
//   }

//   Future<void> savePdf(File file) async {
//     Directory appDocDir = await getApplicationDocumentsDirectory();
//     String appDocPath = appDocDir.path;
//     String pdfPath = '$appDocPath/${file.path.split('/').last}';

//     await file.copy(pdfPath);

//     setState(() {
//       pdfFiles.add(File(pdfPath));
//     });
//   }
// }


