# Make presentations

This was made with [Reveal.js](https://github.com/hakimel/reveal.js/).

## Start Code

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <title>EMPTY TITLE</title>

  <link rel="icon" href="/favicon.png"/>
  <link rel="apple-touch-icon-precomposed" href="/favicon.png"/>

  <link rel="stylesheet" href="/css/reveal.css">
  <!--<link rel="stylesheet" href="/css/theme/white.css">-->

  <!-- Theme used for syntax highlighting of code -->
  <link rel="stylesheet" href="/css/custom/github.css">

  <!-- Custom CSS -->
  <link rel="stylesheet" href="/css/custom/white_custom.css">
  <link rel="stylesheet" href="/css/custom/custom.css">
  <link rel="stylesheet" href="/css/custom/kbd.css">

  <!-- Printing and PDF exports -->
  <script src="/js/create_link.js"></script>

  <script src="/js/libs/jquery.min.js"></script>
</head>
<body>
<div class="reveal">
  <div class="slides">


    <!--SECTION-->
    <section data-markdown data-state="first_page">
    <textarea data-template>
    
      <div id="copyright"></div>
    </textarea>
    </section>
    
    
    <!--SECTION-->
    <section>
      <section data-markdown>
      <textarea data-template>
        
      </textarea>
      </section>
      
      <section data-markdown>
      <textarea data-template>
      
      </textarea>
      </section>
    </section>


  </div>
</div>

<script src="/lib/js/head.min.js"></script>
<script src="/js/reveal.js"></script>
<script src="/js/reveal.initialize.js"></script>
<script src="/js/copyright.js"></script>

</body>
</html>

```

## How to use

```html
<!-- GENERAL SINGLE PAGE -->
<section>
</section>


<!-- MARKDOWN PAGE -->
<section data-markdown>
  <textarea data-template>
    <!-- Enter the Markdown code -->
  </textarea>
</section>


<!-- VERTICAL MOVEMENT PAGE -->
<section>
  <!-- V PAGE 1 -->
  <section>
  </section>
  <!-- V PAGE 2 -->
  <section>
  </section>
</section>
```

## Presentations URL Note

### For Designer

#### [디자이너를 위한 웹 개발 개론](https://parkyoungwoong.github.io/setPresentation/presentations/special/for_designer/)

### Level1

#### [HTML](https://parkyoungwoong.github.io/setPresentation/presentations/level1/html/)

#### [CSS](https://parkyoungwoong.github.io/setPresentation/presentations/level1/css/)

### jQuery for Level 2

#### [JavaScript for jQuery, 선행학습](https://parkyoungwoong.github.io/setPresentation/presentations/level2/jquery/prior_learning)

`표기법` `Zero-based` `JS 데이터 종류` `변수` `기명 함수` `익명 함수` `예약어` `length` `연산자` `jQuery 문법`

#### [jQuery Animation Methods](https://parkyoungwoong.github.io/setPresentation/presentations/level2/jquery/animation)

`show` `hide` `toggle` `fadeIn` `fadeOut` `fadeToggle` `slideDown` `slideUp` `slideToggle` `fadeTo` `animate` `delay` `stop` `finish` `애니메이션 대기열(Queue)`

#### [jQuery Style Methods](https://parkyoungwoong.github.io/setPresentation/presentations/level2/jquery/style)

`css`

#### [jQuery Size Methods](https://parkyoungwoong.github.io/setPresentation/presentations/level2/jquery/size)

`width` `innerWidth` `outerWidth` `height` `innerHeight` `outerHeight`

#### [jQuery Position Methods](https://parkyoungwoong.github.io/setPresentation/presentations/level2/jquery/position)

`offsetParent` `position` `offset` `scrollTop` `scrollLeft`

#### [jQuery Attribute Methods](https://parkyoungwoong.github.io/setPresentation/presentations/level2/jquery/attribute)

`hasClass` `addClass` `removeClass` `toggleClass` `attr` `removeAttr` `prop` `data` `val`

#### [jQuery Event Methods](https://parkyoungwoong.github.io/setPresentation/presentations/level2/jquery/event)

`on` `off` `one` `jQuery 이벤트 종류` `Event 객체` `이벤트 버블링(Bubbling)` `이벤트 캡처링(Capturing)`
 
#### [jQuery Node Methods](https://parkyoungwoong.github.io/setPresentation/presentations/level2/jquery/node)

`first` `last` `eq` `index` `find` `filter` `not` `children` `parent` `parents` `prev` `next` `siblings` `prepend` `prependTo` `append` `appendTo` `html` `text` `remove` `empty` `each`

### JavaScript for Level 2

#### [구문(Statements)](https://parkyoungwoong.github.io/setPresentation/presentations/level2/javascript/statements)

`if` `else` `switch` `for` `while` `case` `default` `break` `continue`

#### [함수(Function)](https://parkyoungwoong.github.io/setPresentation/presentations/level2/javascript/function)
                
`선언(Declarations)` `표현(Expressions)` `즉시실행함수(IIFE)` `인자(Arguments)` `매개변수(Parameters)` `함수 종료` `arguments 객체` `유효범위(Scope)` `렉시컬(Lexical)` `호이스팅(Hoisting)` `콜백(Callback)`

#### [Core functions(Methods)](https://parkyoungwoong.github.io/setPresentation/presentations/level2/javascript/core_functions)

`String` `Number` `Math` `Date` `Array` `Timer`

#### [this](https://parkyoungwoong.github.io/setPresentation/presentations/level2/javascript/this)

#### [GSAP(TweenMax)](https://parkyoungwoong.github.io/setPresentation/presentations/level2/libraries/gsap)

`GSAP` `TweenMax` `TimelineMax`
