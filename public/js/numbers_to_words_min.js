function NumbersToWords(){}Array.prototype.each_slice=function(e){return_arr=new Array;for(var t=0,n=this.length;t<n;t+=e){return_arr.push(this.slice(t,t+e))}return return_arr};NumbersToWords.prototype.context="";NumbersToWords.prototype.WORDS="hundred thousand million billion trillion gazillion".split(" ");NumbersToWords.prototype.ONES="zero one two three four five six seven eight nine ten".split(" ");NumbersToWords.prototype.TENS="eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty".split(" ");NumbersToWords.prototype.MULTIPLES_OF_TEN="ten twenty thirty fourty fifty sixty seventy eighty ninty hundred".split(" ");NumbersToWords.prototype.set_context=function(e){this.context=e};NumbersToWords.prototype.convert=function(e){var t="";if(typeof e!=="string")var e=e.toFixed();var e=parseInt(e,10);if(e<0)e=0;if(e<=999){t+=this.convert_segment(e)}else{number_parsed=e.toFixed().split("").reverse().each_slice(3);output_arr=[];for(i=0;i<number_parsed.length;i++){segment_num=parseInt(number_parsed[i].reverse().join(""),10);if(i==0){var n=this.convert_segment(segment_num);if(n){output_arr.push(n)}}else{output_arr.push(this.convert_segment(segment_num)+" "+this._capitalize(this.WORDS[i]))}}t+=output_arr.reverse().join(", ")}if(this.context!==""){t+=" "+this.context}remove_extra=t.slice(-this.context.length);return t};NumbersToWords.prototype.convert_segment=function(e){var t="";if(e<=0||typeof e!=="number"){e=0;t+=""}else if(e<=10){t+=this._capitalize(this.ONES[e])}else if(e<=20){t+=this._capitalize(this.TENS[e-11])}else if(e<=99){t+=this._capitalize(this.MULTIPLES_OF_TEN[Math.floor(e/10)-1]);if(e%10>0){t+="-";t+=this._capitalize(this.ONES[Math.floor(e%10)])}}else if(e<=999){t+=this._capitalize(this.ONES[Math.floor(e/100)]);t+=" ";t+=this._capitalize(this.WORDS[0]);if(e%100>0){t+=" and ";t+=this.convert_segment(e%100)}}return t};NumbersToWords.prototype._capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}