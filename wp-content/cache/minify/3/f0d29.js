window.wp=window.wp||{},function(a){wp.passwordStrength={meter:function(b,c,d){if(a.isArray(c)||(c=[c.toString()]),b!=d&&d&&d.length>0)return 5;if("undefined"==typeof window.zxcvbn)return-1;var e=zxcvbn(b,c);return e.score},userInputBlacklist:function(){var b,c,d,e,f=[],g=[],h=["user_login","first_name","last_name","nickname","display_name","email","url","description","weblog_title","admin_email"];for(f.push(document.title),f.push(document.URL),c=h.length,b=0;b<c;b++)e=a("#"+h[b]),0!==e.length&&(f.push(e[0].defaultValue),f.push(e.val()));for(d=f.length,b=0;b<d;b++)f[b]&&(g=g.concat(f[b].replace(/\W/g," ").split(" ")));return g=a.grep(g,function(b,c){return!(""===b||4>b.length)&&a.inArray(b,g)===c})}},window.passwordStrength=wp.passwordStrength.meter}(jQuery);