import 'dart:html';
import '../../SBURBSim.dart';

main() {
  querySelector("#pw_hint_button").onClick.listen((e) => toggle(querySelector("#spoiler")));
}
