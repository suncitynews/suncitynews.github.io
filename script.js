{\rtf1\ansi\ansicpg936\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u38543 \u26426 \u29983 \u25104 \u30340 \u21464 \u37327 \u21517 \
const dateForm = document.querySelector('.dateForm');\
const dateInput = document.querySelector('.dateInput');\
const bgGrid = document.querySelector('.bgGrid');\
\
// \uc0\u27169 \u25311 \u26085 \u26399 \u21040 \u25991 \u20214 \u30340 \u26144 \u23556 \u65288 \u38656 \u26681 \u25454 \u23454 \u38469 \u24773 \u20917 \u22635 \u20805 \u65289 \
const dateMap = \{\
    '2023-09-15': 'abc123.html',\
    '2023-09-16': 'def456.html'\
\};\
\
// \uc0\u22788 \u29702 \u26085 \u26399 \u36755 \u20837 \
dateForm.addEventListener('submit', function(e) \{\
    e.preventDefault();\
    const date = dateInput.value;\
    \
    if (dateMap[date]) \{\
        window.location.href = `news/$\{dateMap[date]\}`;\
    \} else \{\
        alert('\uc0\u26410 \u25214 \u21040 \u30456 \u20851 \u26085 \u26399 \u30340 \u26032 \u38395 ');\
    \}\
\});\
\
// \uc0\u32593 \u26684 \u32972 \u26223 \u20132 \u20114 \
document.addEventListener('mousemove', function(e) \{\
    const x = (e.clientX / window.innerWidth) * 100 - 50;\
    const y = (e.clientY / window.innerHeight) * 100 - 50;\
    bgGrid.style.transform = `translate($\{x/5\}px, $\{y/5\}px)`;\
\});\
\
// \uc0\u31105 \u29992 \u28378 \u21160 \
window.addEventListener('wheel', function(e) \{\
    e.preventDefault();\
\}, \{ passive: false \});\
\
// \uc0\u38459 \u27490 \u35302 \u25720 \u35774 \u22791 \u30340 \u28378 \u21160 \
window.addEventListener('touchmove', function(e) \{\
    e.preventDefault();\
\}, \{ passive: false \});}