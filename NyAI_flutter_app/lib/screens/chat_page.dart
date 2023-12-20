// import 'package:flutter/material.dart';
// import 'package:webview_flutter/webview_flutter.dart';
// chat_page.dart

import 'package:flutter/material.dart';

class ChatPage extends StatelessWidget {
  final List<ChatMessage> messages = [
    ChatMessage('What is nyAI, and how does it work?', 'nyAI is a website designed to simplify legal documentation for individuals and small businesses in India. It utilizes AI technology to automatically generate legal documents in plain language, making them easy to understand.'),
    ChatMessage('How can nyAI help me with legal document creation?', 'nyAI uses AI-powered algorithms to draft legal documents based on your specific needs. It simplifies legal jargon, making the documents more accessible to users without legal expertise.'),
    ChatMessage('What types of legal documents can nyAI help generate?', 'nyAI can assist in creating a variety of legal documents, including contracts, agreements, wills, and more. The platform aims to cover a wide range of common legal needs for individuals and small businesses who may not have access to legal resources.'),
    ChatMessage('Can I customize the generated legal documents?', 'Yes, nyAI allows users to customize the generated documents to suit their specific requirements. You can input relevant details to tailor the documents to your unique situation.'),
    ChatMessage('Is there a text-to-speech option available?', 'Yes, nyAI provides a text-to-speech option for users who prefer to listen to the content instead of reading it. This feature enhances accessibility for users with different preferences.'),
    ChatMessage('Are the legal documents created by nyAI legally binding?', 'While nyAI aims to simplify legal documentation, it\'s essential to consult with a legal professional to ensure the documents meet all legal requirements and are binding in the specific jurisdiction which is also provided by nyAI itself.'),
    ChatMessage('How can I seek legal advice from an expert through nyAI?', 'Users can connect with local legal experts through nyAI for more complex legal issues. The platform facilitates communication between users and legal professionals, providing a convenient way to seek guidance.'),
    ChatMessage('Is nyAI only available in English?', 'No, nyAI offers multilingual options to cater to a diverse user base. The platform aims to be accessible to individuals who speak different languages across India.'),
    ChatMessage('What impact can nyAI have on individuals and small businesses?', 'nyAI can significantly save time and reduce errors in legal documentation for users who may not have access to extensive legal resources. It empowers individuals and small businesses by providing a cost-effective and efficient solution for their legal needs.'),
    ChatMessage('What techniques does nyAI use for creating and simplifying legal documents?', 'nyAI employs advanced natural language processing (NLP) and machine learning algorithms to understand legal content and generate documents in plain language. The platform is continuously updated to improve its accuracy and effectiveness.'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('FAQs'),
      ),
      body: ListView.builder(
        itemCount: messages.length,
        itemBuilder: (context, index) {
          return ChatBubble(message: messages[index]);
        },
      ),
    );
  }
}

class ChatBubble extends StatelessWidget {
  final ChatMessage message;

  ChatBubble({required this.message});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(8.0),
      padding: EdgeInsets.all(12.0),
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            message.question,
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
          ),
          SizedBox(height: 8.0),
          Text(
            message.answer,
            style: TextStyle(fontSize: 14, color: Colors.white),
          ),
        ],
      ),
    );
  }
}

class ChatMessage {
  final String question;
  final String answer;

  ChatMessage(this.question, this.answer);
}