function conv(no)
{
    var ref = {
        '1' : "এক",
        '2' : "দুই", 
        '3' : "তিন", 
        '4' : "চার", 
        '5' : "পাঁচ", 
        '6' : "ছয়", 
        '7' : "সাত", 
        '8' : "আট", 
        '9' : "নয়", 
        '10' : "দশ", 
        '11' : "এগারো",
        '12' : "বারো", 
        '13' : "তেরো", 
        '14' : "চৌদ্দ", 
        '15' : "পনের", 
        '16' : "ষোল", 
        '17' : "সতের", 
        '18' : "আঠার", 
        '19' : "উনিশ",
        '20' : "বিশ",
        '21' : 'একুশ',
        '22' : 'বাইশ',
        '23' : 'তেইশ',
        '24' : "চব্বিশ", 
        '25' : "পঁচিশ", 
        '26' : "ছাব্বিশ", 
        '27' : "সাতাশ", 
        '28' : "আটাশ", 
        '29' : "ঊনত্রিশ", 
        '30' : "ত্রিশ", 
        //'31' : "একত্রিশ", 
        '32' : "বত্রিশ", 
        '33' : "তেত্রিশ", 
        '34' : "চৌত্রিশ", 
        '35' : "পঁয়ত্রিশ", 
        '36' : "ছত্রিশ", 
        '37' : "সাইত্রিশ", 
        '38' : "আটত্রিশ", 
        '39' : "ঊনচল্লিশ", 
        '40' : "চল্লিশ", 
        //'41' : "একচল্লিশ", 
        '42' : "বিয়াল্লিশ", 
        '43' : "তেতাল্লিশ", 
        '44' : "চুয়াল্লিশ", 
        '45' : "পঁয়তাল্লিশ", 
        '46' : "ছিচল্লিশ", 
        '47' : "সাতচল্লিশ",
        '48' : "আটচল্লিশ", 
        '49' : "ঊনপঞ্চাশ", 
        '50' : "পঞ্চাশ", 
        '51' : "একান্ন", 
        '52' : "বাহান্ন", 
        '53' : "তেপ্পান্ন", 
        '54' : "চুয়ান্ন", 
        '55' : "পঞ্চান্ন", 
        '56' : "ছাপ্পান্ন", 
        '57' : "সাতান্ন", 
        '58' : "আটান্ন", 
        '59' : "ঊনষাট", 
        '60' : "ষাট", 
        '61' : "একষট্টি", 
        '62' : "বাষট্টি", 
        '63' : "তেষট্টি", 
        '64' : "চৌষট্টি", 
        '65' : "পঁয়ষট্টি", 
        '66' : "ছেষট্টি", 
        '67' : "সাতষট্টি", 
        '68' : "আটষট্টি", 
        '69' : "উনসত্তুর", 
        '70' : "সত্তর", 
        '71' : "একাত্তর", 
        '72' : "বাহাত্তর", 
        '73' : "তেহাত্তুর", 
        '74' : "চুয়াত্তর", 
        '75' : "পঁচাত্তর",
        '76' : "ছিয়াত্তর", 
        '77' : "সাতাত্তর", 
        '78' : "আটাত্তর", 
        '79' : "ঊনআশি", 
        '80' : "আশি", 
        //'81' : "একাশি", 
        '82' : "বিরাশি", 
        '83' : "তিরাশি", 
        '84' : "চুরাশি", 
        '85' : "পঁচাশি", 
        '86' : "ছিয়াশি", 
        '87' : "সাতাশি", 
        '88' : "আটাশি", 
        '89' : "উননব্বই", 
        '90' : "নব্বুই", 
        //'91' : "একানব্বই", 
        '92' : "বিরানব্বই", 
        '93' : "তিরানব্বই", 
        '94' : "চুরানব্বই", 
        '95' : "পঁচানব্বই", 
        '96' : "ছিয়ানব্বই", 
        '97' : "সাতানব্বই", 
        '98' : "আটানব্বই", 
        '99' : "নিরানব্বই", 
        //'100' : 'শো',
        //'1000' : "হাজার",
    };
    //var no = document.getElementById('input').value ;
    //var no = 9099;
    var arr = []

    if (no != 0)
    {
        var thou =''
        var hun =''
        var ten =''
        if (no >= 1000 && no <= 99999){
            let tens = no % 1000
            let hundreds = no - tens
            thou = ref[hundreds / 1000] +' '+ 'হাজার'
            arr.push(hundreds/1000)
            arr.push('হাজার')
            no -= hundreds
        }
        if (no >= 100 && no <= 999){
            let tens = no % 100
            let hundreds = no - tens
            hun = ref[hundreds / 100] +' '+ 'শো'
            arr.push(hundreds/100)
            arr.push('শো')
            no -= hundreds 
        }
        if (no > 0 && no < 100){
            if (no in ref)
            {
                ten = ref[no]
                arr.push(ten)
            }
            else if (!(no in ref))
            {
                ten = ref['1']+ref[no[0]+'0']
                arr.push(ten)
            }
        }
        //console.log(thou+" "+hun+" "+ten)
        console.log(arr)
        result = thou+" "+hun+" "+ten
        final.innerHTML = result;
    }
}

// value = 100
// for (i = 0;i < value;i++)
// {
//     console.log(i+1,conv(i))
// }