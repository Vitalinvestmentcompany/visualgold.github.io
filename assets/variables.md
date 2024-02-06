html{
font-size:  
 scroll-behavior: smooth;
}

                  :root{
                      --body-font: 'poppins', 'san-serif' ;

                      --big-font:           4rem;
                      --h1-font:            3.6rem;
                      --h2-font:              2.4rem;
                      --h3-font:              2rem;
                      --h4-font:               1.8rem;
                      --normal-font:      1.6rem;
                      --small-font:           1.4rem;
                      --smaller-font:       1.3rem;

                      /* Font Weight */
                      --font-regular:          400;
                      --font-medium:        500;
                      --font-semi-bold:      600;

                      /* Color Variables */
                      --primary-color:       #3671E9;
                      --primary-color-hover:
                      --text-color:       #fff;
                      --text-color-dark:       #0D0D2B;

                       /* Z-Index */
                      --z-overrlay:                       10;
                      --z-fixed:                            1000;

                      /* Transtion */
                          --tran-0-2:                       0.2s;
                          --tran-0-3:                      0.3s;
                          --tran-0-5:                     0.5s;
                  }

                              /* Small Screen Variables */
                  @media screen and (max-width:990px) {
                      :root {
                          --big-font:             3.5rem;
                          --h1-font:               2.4rem;
                          --h2-font:               2rem;
                          --h3-font:               1.8rem;
                          --h4-font:               1.6rem;
                          --normal-font:      1.5rem;
                          --small-font:          1.3rem;
                          --smaller-font:       1.2rem;
                      }
                  }

                          /*  Pre Css  */

                  *{
                      margin:                   0;
                      padding:                0;
                      box-sizing:             border-box;
                  }
                          /* PRE CSS */
                  body,
                  button,
                  input{
                      font-family:        var(--body-font)  ;
                      font-size:                 var(--normal-font);
                      font-weight:            var(--font-regular);
                      color:                       var(  --text-color);

                  body{
                      overflow-x: hidden;
                      background-color:     #fff;
                  }

                  ul{
                      list-style:                         none;
                  }
                  a ,
                  a :active,
                  a:link,
                  a:visited,
                  a:hover{
                      text-decoration:             none;
                  }
                  img{
                      width:              100%;
                      height:             100%;
                      object-fit:          cover;
                  }
                  input:focus {
                      outline: none !important;
                  }

                  /* REUSABLE CSS */
                  .section  {
                      padding:                 7rem 2rem;
                  }


                  .container{
                      max-width:             1030px;
                      width:                      100%;
                      margin:                   0 auto;
                      padding:                 0 3rem;
                  }

                  .flex{
                      display:                  flex;
                      align-items:         center;
                       column-gap:         0.6rem;
                  }
                  .button{
                      border: none;
                      outline: none;
                      color:
                      padding: 1.4rem 4rem;
                      border-radius: 3rem;
                      background-color: #3671E9;
                      transition: all var(--tran-0-3) ease;
                      cursor: pointer;
                  }
                  .button:hover {
                      background-color:
                  }
