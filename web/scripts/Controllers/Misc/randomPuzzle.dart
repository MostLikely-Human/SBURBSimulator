import 'dart:html';
import '../../SBURBSim.dart';
//import '../../../images/clubs.bmp';

main() {
  querySelector("#pw_hint_button").onClick.listen((e) => toggle(querySelector("#spoiler")));
}
