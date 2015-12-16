# mModal plug-in
ページ内にモーダルウィンドウを生成するためのjQueryプラグインです。

This is jQuery plug-in that it can generate some modal windows in your web page.

## 使用方法 / How to use
jQuery本体の読み込み後、jquery.mModal.jsを読み込みます。
`$.mModal()`メソッドを使用することで、専用にマークアップされた要素がモーダルウィンドウとして機能します。

HTML内では通常表示させる内容を`mModal-page`クラス要素で覆い、モーダルウィンドウとして表示する内容を`mModal-modal`クラス要素と`mModal-modal_cont`クラス要素で覆います。
`mModal-open`クラス要素をクリックするとモーダルウィンドウが表示され、`mModal-close`クラス要素をクリックすると非表示になります。
モーダルウィンドウが表示されている間は`body`要素に`mModal-opened`クラスが付与されます。


You load jquery.mModal.js file, after loading jQuery library.
The element that be markup for mModal works as modal window when you use `$.mModal()` method.

Normal contents should be wrapped by the element of `mModal-page` class, and the contents in the modal window should be wrapped by the element of `mModal-modal` class and the element of `mModal-modal_cont` class.
The modal window will be displayed when you click the elements of `mModal-open` class, and it will be hidden when you click the elements of `mModal-close` class.
`body` elements will have `mModal-opened` class when the modal window is been displayed.


## 使用例 / Example

```
<div class="mModal-page">
  <h1>Normal Contents</h1>
  <p><a class="mModal-open" href="#">MODAL OPEN</a></p>
  <p>This is normal contents.</p>
</div>

<div class="mModal-modal">
  <div class="mModal-modal_cont">
    <h2>Modal Contents</h2>
    <p><a class="mModal-close" href="#">MODAL CLOSE</a></p>
    <p>This is modal contents.</p>
  </div>
</div>

<script>
$(function() {
  $.mModal();
});
</script>
```


## 引数 / Parameters
`$.mModal()`メソッドはオプジェクトを引数とすることで、オプションを指定することができます。


`$.mModal()`method has 1 object parameter it adds some options.


```
$.mModal({
  type: 'fade', //モーダルウィンドウ表示時のアニメーションタイプ。現バージョンでは`fade`のみです。
  duration: 260, //モーダルウィンドウ表示時のアニメーションスピード。
  easing: 'swing', //モーダルウィンドウ表示時のアニメーションイージング。CSSアニメーションの場合は反映されず、`ease-in-out`が適応されます。
  scroll_top: true, //モーダルウィンドウを毎回ページトップから表示するかどうか。

  velocity_js: true, //jQueryプラグイン版の`velocity.js`を導入している場合、`velocity.js`アニメーションの使用の可否を設定できます。
  css_animation: true, //CSS3の`transition`アニメーションが使用可能な場合、`transition`アニメーションの使用の可否を設定できます。

  before_open: function(e) {}, //モーダルウィンドウを表示する直前に実行される関数です。パラメータ`e`にはクリックイベントが渡されています。
  after_open: function(e) {}, //モーダルウィンドウを表示する直後に実行される関数です。パラメータ`e`にはクリックイベントが渡されています。
  before_close: function(e) {}, //モーダルウィンドウを非表示にする直前に実行される関数です。パラメータ`e`にはクリックイベントが渡されています。
  after_close: function(e) {}, //モーダルウィンドウを非表示にする直前に実行される関数です。パラメータ`e`にはクリックイベントが渡されています。

  open_classname: 'mModal-open', //モーダルウィンドウを表示するためにクリックする要素のクラス名を変更できます。
  close_classname: 'mModal-close', //モーダルウィンドウを非表示にするためにクリックする要素のクラス名を変更できます。
  page_classname: 'mModal-page', //通常のコンテンツを覆う要素のクラス名を変更できます。
  modal_classname: 'mModal-modal', //モーダルウィンドウで表示するコンテンツを覆う要素のクラス名を変更できます。
  modal_cont_classname: 'mModal-modal_cont', //モーダルウィンドウで表示するコンテンツを覆う要素のクラス名を変更できます。
  opened_classname: 'mModal-opened' //モーダルウィンドウが開いている時に`body`要素に付与されるクラス名を変更できます。
});
```


```
$.mModal({
  type: 'fade', //This is the animation type when the modal window is displayed. This version is supported only `fade`.
  duration: 260, //This is the animation speed when the modal window is displayed.
  easing: 'swing', //This is the animation easing when the modal window is displayed. It will be ignored and `ease-in-out` is used when you use the CSS animation.
  scroll_top: true, //Whether the modal window every time to display from the top of the page.

  velocity_js: true, //If you introduce jQuery plug-in of `velocity.js`, whether to use `velocity.js` animation。
  css_animation: true, //If the browser is supported `transition` animation of CSS3, whether to use `transition` animation。

  before_open: function(e) {}, //This is the function that called before the modal window is displayed. `e` parameter has the click event.
  after_open: function(e) {}, //This is the function that called after the modal window is displayed. `e` parameter has the click event.
  before_close: function(e) {}, //This is the function that called before the modal window is hidden. `e` parameter has the click event.
  after_close: function(e) {}, //This is the function that called after the modal window is hidden. `e` parameter has the click event.

  open_classname: 'mModal-open', //The class name of the elements that will be clicked for display the modal window.
  close_classname: 'mModal-close', //The class name of the elements that will be clicked for hidden the modal window.
  page_classname: 'mModal-page', //The class name of the elements that will wrap normal contents.
  modal_classname: 'mModal-modal', //The class name of the elements that wrap the contents in modal window.
  modal_cont_classname: 'mModal-modal_cont', //The class name of the elements that wrap the contents in modal window.
  opened_classname: 'mModal-opened' //The class name of `body` element when the modal window is displayed.
});
```
