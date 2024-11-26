var num = parseInt(prompt("Insira um número menor que 1000"));
var centena = parseInt
var dezena = parseInt
var unidade = parseInt

if (num >= 100 && num < 200) {
    centena = 1
} else if (num >= 200 && num < 300) {
    centena = 2
} else if (num >= 300 && num < 400) {
    centena = 3
} else if (num >= 400 && num < 500) {
    centena = 4
} else if (num >= 500 && num < 600) {
    centena = 5
} else if (num >= 600 && num < 700) {
    centena = 6
} else if (num >= 700 && num < 800) {
    centena = 7
} else if (num >= 800 && num < 900) {
    centena = 8
} else if (num >= 900 && num <= 999) {
    centena = 9
} else {
    centena = 0
};

if (num >= 10 && num <= 19 || num >= 110 && num <= 119 || num >= 210 && num <= 219 || num >= 310 && num <= 319 || num >= 410 && num <= 419 ||
    num >= 510 && num <= 519 || num >= 610 && num <= 619 || num >= 710 && num <= 719 || num >= 810 && num <= 819 || num >= 910 && num <= 919) {
    dezena = 1
} else if (num >= 20 && num <= 29 || num >= 120 && num <= 129 || num >= 220 && num < 229 || num >= 320 && num <= 329 || num >= 420 && num <= 429 ||
    num >= 520 && num <= 529 || num >= 620 && num <= 629 || num >= 720 && num <= 729 || num >= 820 && num <= 829 || num >= 920 && num <= 929) {
    dezena = 2
} else if (num >= 30 && num <= 39 || num >= 130 && num <= 139 || num >= 230 && num < 239 || num >= 330 && num <= 339 || num >= 430 && num <= 439 ||
    num >= 530 && num <= 539 || num >= 630 && num <= 639 || num >= 730 && num <= 739 || num >= 830 && num <= 839 || num >= 930 && num <= 939) {
    dezena = 3
} else if (num >= 40 && num <= 49 || num >= 140 && num <= 149 || num >= 240 && num < 249 || num >= 340 && num <= 349 || num >= 440 && num < 449 ||
    num >= 540 && num < 549 || num >= 640 && num < 649 || num >= 740 && num < 749 || num >= 840 && num < 849 || num >= 940 && num < 949) {
    dezena = 4
} else if (num >= 50 && num <= 59 || num >= 150 && num <= 159 || num >= 250 && num < 259 || num >= 350 && num <= 359 || num >= 450 && num <= 459 ||
    num >= 550 && num <= 559 || num >= 650 && num <= 659 || num >= 750 && num <= 759 || num >= 850 && num <= 859 || num >= 950 && num < 959) {
    dezena = 5
} else if (num >= 60 && num <= 69 || num >= 160 && num <= 169 || num >= 260 && num < 269 || num >= 360 && num <= 369 || num >= 460 && num <= 469 ||
    num >= 560 && num <= 569 || num >= 660 && num < 669 || num >= 760 && num < 769 || num >= 860 && num < 869 || num >= 960 && num < 969) {
    dezena = 6
} else if (num >= 70 && num <= 79 || num >= 170 && num <= 179 || num >= 270 && num < 279 || num >= 370 && num <= 379 || num >= 470 && num <= 479 ||
    num >= 570 && num <= 579 || num >= 670 && num < 679 || num >= 770 && num < 779 || num >= 870 && num < 879 || num >= 970 && num < 979) {
    dezena = 7
} else if (num >= 80 && num <= 89 || num >= 180 && num <= 189 || num >= 280 && num < 289 || num >= 380 && num <= 389 || num >= 480 && num <= 489 ||
    num >= 580 && num <= 589 || num >= 680 && num <= 689 || num >= 780 && num <= 789 || num >= 880 && num <= 889 || num >= 980 && num <= 989) {
    dezena = 8
} else if (num >= 90 && num <= 99 || num >= 190 && num <= 199 || num >= 290 && num < 299 || num >= 390 && num <= 399 || num >= 490 && num <= 499 ||
    num >= 590 && num <= 599 || num >= 690 && num <= 699 || num >= 790 && num <= 799 || num >= 890 && num <= 899 || num >= 990 && num <= 999) {
    dezena = 9
} else {
    dezena = 0
};

if (num == 1 || num == 11 || num == 21 || num == 31 || num == 41 || num == 51 || num == 61 || num == 71 || num == 81 || num == 91 ||
    num == 101 || num == 111 || num == 121 || num == 131 || num == 141 || num == 151 || num == 161 || num == 171 || num == 181 || num == 191 ||
    num == 201 || num == 211 || num == 221 || num == 231 || num == 241 || num == 251 || num == 261 || num == 271 || num == 281 || num == 291 ||
    num == 301 || num == 311 || num == 321 || num == 331 || num == 341 || num == 351 || num == 361 || num == 371 || num == 381 || num == 391 ||
    num == 491 || num == 591 || num == 691 || num == 791 || num == 891 || num == 901 || num == 911 || num == 921 || num == 931 || num == 941 ||
    num == 951 || num == 961 || num == 971 || num == 981 || num == 991) {
    unidade = 1
} else if (num == 2 || num == 12 || num == 22 || num == 32 || num == 42 || num == 52 || num == 62 || num == 72 || num == 82 || num == 92 ||
    num == 102 || num == 112 || num == 122 || num == 132 || num == 142 || num == 152 || num == 162 || num == 172 || num == 182 || num == 192 ||
    num == 202 || num == 212 || num == 222 || num == 232 || num == 242 || num == 252 || num == 262 || num == 272 || num == 282 || num == 292 ||
    num == 302 || num == 312 || num == 322 || num == 332 || num == 342 || num == 352 || num == 362 || num == 372 || num == 382 || num == 392 ||
    num == 492 || num == 592 || num == 692 || num == 792 || num == 892 || num == 902 || num == 912 || num == 922 || num == 932 || num == 942 ||
    num == 952 || num == 962 || num == 972 || num == 982 || num == 992) {
    unidade = 2
} else if (num == 3 || num == 13 || num == 23 || num == 33 || num == 43 || num == 53 || num == 63 || num == 73 || num == 83 || num == 93 ||
    num == 103 || num == 113 || num == 123 || num == 133 || num == 143 || num == 153 || num == 163 || num == 173 || num == 183 || num == 193 ||
    num == 203 || num == 213 || num == 223 || num == 233 || num == 243 || num == 253 || num == 263 || num == 273 || num == 283 || num == 293 ||
    num == 303 || num == 313 || num == 323 || num == 333 || num == 343 || num == 353 || num == 363 || num == 373 || num == 383 || num == 393 ||
    num == 493 || num == 593 || num == 693 || num == 793 || num == 893 || num == 903 || num == 913 || num == 923 || num == 933 || num == 943 ||
    num == 953 || num == 963 || num == 973 || num == 983 || num == 993) {
    unidade = 3
} else if (num == 4 || num == 14 || num == 24 || num == 34 || num == 44 || num == 54 || num == 64 || num == 74 || num == 84 || num == 94 ||
    num == 104 || num == 114 || num == 124 || num == 134 || num == 144 || num == 154 || num == 164 || num == 174 || num == 184 || num == 194 ||
    num == 204 || num == 214 || num == 224 || num == 234 || num == 244 || num == 254 || num == 264 || num == 274 || num == 284 || num == 294 ||
    num == 304 || num == 314 || num == 324 || num == 334 || num == 344 || num == 354 || num == 364 || num == 374 || num == 384 || num == 394 ||
    num == 494 || num == 594 || num == 694 || num == 794 || num == 894 || num == 904 || num == 914 || num == 924 || num == 934 || num == 944 ||
    num == 954 || num == 964 || num == 974 || num == 984 || num == 994) {
    unidade = 4
} else if (num == 5 || num == 15 || num == 25 || num == 35 || num == 45 || num == 55 || num == 65 || num == 75 || num == 85 || num == 95 ||
    num == 105 || num == 115 || num == 125 || num == 135 || num == 145 || num == 155 || num == 165 || num == 175 || num == 185 || num == 195 ||
    num == 205 || num == 215 || num == 225 || num == 235 || num == 245 || num == 255 || num == 265 || num == 275 || num == 285 || num == 295 ||
    num == 305 || num == 315 || num == 325 || num == 335 || num == 345 || num == 355 || num == 365 || num == 375 || num == 385 || num == 395 ||
    num == 495 || num == 595 || num == 695 || num == 795 || num == 895 || num == 905 || num == 915 || num == 925 || num == 935 || num == 945 ||
    num == 955 || num == 965 || num == 975 || num == 985 || num == 995) {
    unidade = 5
    
} else if (num == 6 || num == 16 || num == 26 || num == 36 || num == 46 || num == 56 || num == 66 || num == 76 || num == 86 || num == 96 ||
    num == 106 || num == 116 || num == 126 || num == 136 || num == 146 || num == 156 || num == 166 || num == 176 || num == 186 || num == 196 ||
    num == 206 || num == 216 || num == 226 || num == 236 || num == 246 || num == 256 || num == 266 || num == 276 || num == 286 || num == 296 ||
    num == 306 || num == 316 || num == 326 || num == 336 || num == 346 || num == 356 || num == 366 || num == 376 || num == 386 || num == 396 ||
    num == 496 || num == 596 || num == 696 || num == 796 || num == 896 || num == 906 || num == 916 || num == 926 || num == 936 || num == 946 ||
    num == 956 || num == 966 || num == 976 || num == 986 || num == 996) {
    unidade = 6
} else if (num == 7 || num == 17 || num == 27 || num == 37 || num == 47 || num == 57 || num == 67 || num == 77 || num == 87 || num == 97 ||
    num == 107 || num == 117 || num == 127 || num == 137 || num == 147 || num == 157 || num == 167 || num == 177 || num == 187 || num == 197 ||
    num == 207 || num == 217 || num == 227 || num == 237 || num == 247 || num == 257 || num == 267 || num == 277 || num == 287 || num == 297 ||
    num == 307 || num == 317 || num == 327 || num == 337 || num == 347 || num == 357 || num == 367 || num == 377 || num == 387 || num == 397 ||
    num == 497 || num == 597 || num == 697 || num == 797 || num == 897 || num == 907 || num == 917 || num == 927 || num == 937 || num == 947 ||
    num == 957 || num == 967 || num == 977 || num == 987 || num == 997) {
    unidade = 7
} else if (num == 8 || num == 18 || num == 28 || num == 38 || num == 48 || num == 58 || num == 68 || num == 78 || num == 88 || num == 98 ||
    num == 108 || num == 118 || num == 128 || num == 138 || num == 148 || num == 158 || num == 168 || num == 178 || num == 188 || num == 198 ||
    num == 208 || num == 218 || num == 228 || num == 238 || num == 248 || num == 258 || num == 268 || num == 278 || num == 288 || num == 298 ||
    num == 308 || num == 318 || num == 328 || num == 338 || num == 348 || num == 358 || num == 368 || num == 378 || num == 388 || num == 398 ||
    num == 498 || num == 598 || num == 698 || num == 798 || num == 898 || num == 908 || num == 918 || num == 928 || num == 938 || num == 948 ||
    num == 958 || num == 968 || num == 978 || num == 988 || num == 998) {
    unidade = 8
} else if (num == 9 || num == 19 || num == 29 || num == 39 || num == 49 || num == 59 || num == 69 || num == 79 || num == 89 || num == 99 ||
    num == 109 || num == 119 || num == 129 || num == 139 || num == 149 || num == 159 || num == 169 || num == 179 || num == 189 || num == 199 ||
    num == 209 || num == 219 || num == 229 || num == 239 || num == 249 || num == 259 || num == 269 || num == 279 || num == 289 || num == 299 ||
    num == 309 || num == 319 || num == 329 || num == 339 || num == 349 || num == 359 || num == 369 || num == 379 || num == 389 || num == 399 ||
    num == 499 || num == 599 || num == 699 || num == 799 || num == 899 || num == 909 || num == 919 || num == 929 || num == 939 || num == 949 ||
    num == 959 || num == 969 || num == 979 || num == 989 || num == 999) {
    unidade = 9
} else {
    unidade = 0
};

if (unidade == 1 && dezena == 1 && centena == 1){
    alert(num + " = " + centena + " centena, " + dezena + " dezena, " + unidade + " unidade.")
} else {
    alert(num + " = " + centena + " centenas, " + dezena + " dezenas, " + unidade + " unidades.")
};