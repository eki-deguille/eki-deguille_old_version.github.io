(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),i=n(7),a=(n(0),n(227)),o=["components"],c={title:"Exploring the links between creative execution and marketing effectiveness - Part I: Detectron2 Pre-Trained Object Detection Models",author:"Marina Bermejo Sarmiento, Monica Brondholt Sorensen, Karin Sasaki",author_title:"Data Scientist Consultants",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/Eki_meta_part_I.png",tags:["Object Detection","Optical Character Recognition","Detectron2","Marketing Mix Modelling","Deep Learning"],draft:!1,description:"In this Part I we explore the methodology for using pre-trained Detectron2 models to detect brand-specific object in creative images.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem","Deep Reinforcement Learning"]},s={permalink:"/blog/2022/11/10/creative_execution_and_marketing_effectiveness_part_I",source:"@site/blog\\2022-11-10-creative_execution_and_marketing_effectiveness_part_I.md",description:"In this Part I we explore the methodology for using pre-trained Detectron2 models to detect brand-specific object in creative images.",date:"2022-11-10T00:00:00.000Z",tags:[{label:"Object Detection",permalink:"/blog/tags/object-detection"},{label:"Optical Character Recognition",permalink:"/blog/tags/optical-character-recognition"},{label:"Detectron2",permalink:"/blog/tags/detectron-2"},{label:"Marketing Mix Modelling",permalink:"/blog/tags/marketing-mix-modelling"},{label:"Deep Learning",permalink:"/blog/tags/deep-learning"}],title:"Exploring the links between creative execution and marketing effectiveness - Part I: Detectron2 Pre-Trained Object Detection Models",readingTime:13.915,truncated:!0,prevItem:{title:"Exploring the links between creative execution and marketing effectiveness - Part II Custom trained Detectron2 for OD",permalink:"/blog/2022/11/30/creative_execution_and_marketing_effectiveness_part_II"},nextItem:{title:"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (2/2)",permalink:"/blog/2022/10/26/Interpretability_sentiment_analysis_II"}},l=[],p={toc:l};function m(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{align:"justify"},Object(a.b)("p",null,"This article is ",Object(a.b)("strong",{parentName:"p"},"Part I")," of a set of five technical articles that accompany a ",Object(a.b)("a",{parentName:"p",href:"https://ekimetrics.com/news-and-events/exploring-the-links-between-creative-execution-and-marketing-effectiveness-exclusivepreview"},"whitepaper")," written in collaboration between Meta and Ekimetrics. Object Detection (OD) and Optical Character Recognition (OCR) were used to detect specific features in creative images, such as faces, smiles, text, brand logos, etc. Then, in combination with impressions data, marketing mix models were used to investigate what objects, or combinations of objects in creative images in marketing campaigns, drive higher ROIs.\nIn this Part I we explore the methodology for using pre-trained Detectron2 models to detect brand-specific object in creative images.")))}m.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,f=m["".concat(o,".").concat(g)]||m[g]||u[g]||a;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);