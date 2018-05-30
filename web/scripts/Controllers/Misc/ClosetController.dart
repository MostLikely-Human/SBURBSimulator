import '../../navbar.dart';
import 'dart:html';

void main() {
  loadNavbar();
}

void displayBio() {
  String staff = getParameterByName("staff",null);
  Element div = querySelector("#$staff");
  if(div != null) div.classes.remove("void");
}