/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["formats android/resources should match default snapshot"] = 
`<?xml version="1.0" encoding="UTF-8"?>

<!--
  Do not edit directly, this file was auto-generated.
-->
<resources>
  <dimen name="size-font-small">12rem</dimen>
  <dimen name="size-font-large">18rem</dimen>
  <color name="color-base-red">#ff0000</color><!-- comment -->
  <color name="color-white">#ffffff</color>
</resources>`;
/* end snapshot formats android/resources should match default snapshot */

snapshots["formats android/resources with resourceType override should match snapshot"] = 
`<?xml version="1.0" encoding="UTF-8"?>

<!--
  Do not edit directly, this file was auto-generated.
-->
<resources>
  <dimen name="size-font-small">12rem</dimen>
  <dimen name="size-font-large">18rem</dimen>
  <dimen name="color-base-red">#ff0000</dimen><!-- comment -->
  <dimen name="color-white">#ffffff</dimen>
</resources>`;
/* end snapshot formats android/resources with resourceType override should match snapshot */

snapshots["formats android/resources with resourceMap override should match snapshot"] = 
`<?xml version="1.0" encoding="UTF-8"?>

<!--
  Do not edit directly, this file was auto-generated.
-->
<resources>
  <color name="backgroundColorSecondary">#F2F3F4</color>
  <color name="fontColorPrimary">#000000</color>
</resources>`;
/* end snapshot formats android/resources with resourceMap override should match snapshot */

snapshots["formats android/resources with type & textCase should match snapshot"] = 
`<?xml version="1.0" encoding="UTF-8"?>

<!--
  Do not edit directly, this file was auto-generated.
-->
<resources>
  <item name="headline-font" type="font">@font/comic_sans_bold</item>
  <item name="copytext-font" type="font">@font/comic_sans</item>
  <bool name="headline-text-eslintcase">true</bool>
  <bool name="copytext-text-case">false</bool>
</resources>`;
/* end snapshot formats android/resources with type & textCase should match snapshot */
