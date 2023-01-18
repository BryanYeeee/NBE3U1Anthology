$(function () {
    let logo = $('<div>').attr('id', 'logo')
    logo.append($('<span>').text('Bryan Yee - NBE3U1 Anthology'))
    $('#nav').prepend(logo)

    $('<div>').addClass('navbtn').text('Reflection 1').hover(
        function () {
            $(this).text("Being Human");
        },
        function () {
            $(this).text('Reflection ' + $(this).data('number'));
        }
    ).data('number', 1).prependTo($('#nav #btns')).click(() => {
        $('#content').html(
            `
Bryan Yee
Ms. De Freitas
NBE3U1
October 14, 2022
            
            <center>Childhood: The Source of Our Humanity</center>
            No one can truly define what a human is despite everyone appearing to be human . One interpretation is that a human being is more of a concept rather than a physical entity. Being human is an amalgamation of many factors, such as emotions and social interactions. My childhood taught me how to be human through my culture and role models. Recognizing how my upbringing shaped who I am as a human is essential to improving my knowledge of myself.
            
            My values were influenced by the culture of my childhood. Values matter to being human as it is a reflection of our behaviours. Throughout my life, I have grown up in a predominantly Asian neighbourhood. Subsequently, a large portion of my ideals align with Asian beliefs. For example, Asian culture considers loyalty to family to be an admirable quality. The issue of which culture is superior to others is one that is often discussed. In addition to Asian culture, numerous other cultures also have similar ideals. For instance, Indigenous cultures believe that “trust in a relationship […] is arguably the most important element” (Joseph). The themes of loyalty and trust are two values that are closely related. Our behaviours are influenced by these two shared values because they have an impact on our relationships. Thus, it demonstrates how despite being different, many cultures convey similar values. Therefore, It shows that there is no incorrect culture for teaching people how to be human. Many individuals lack awareness of the motivations behind their actions. Having a foundation on where my values come from can improve self-knowledge since it provides a justification for my behaviour.
            
            I was able to develop as a person because of the ethics that my role models gave me. Ethics are factors of being human as it affects how we decide what is right and wrong. Murray Sinclair is a highly respected First Nations lawyer in Canada, known for his inquisitiveness about identity. Sinclair's experience as a lawyer and his ability to reflect on his opinions makes him an ethical character. Due to the information he possesses, he has a deeper understanding of the world. According to Sinclair, his granddaughter "may have questions that only [he] can answer" (CBC Radio). Given that Sinclair's knowledge is vaster than his granddaughter’s, from her perspective, she certainly views him as a role model. Her morality could be influenced by the lessons Sinclair will be able to transfer to her. Much like Sinclair's granddaughter did, I was able to pick up ethics through my role models. Since my parents raised me, they have taught me various lessons. Their teachings would eventually become my ethics. After working or eating dinner, my parents would tell me to clean up after myself. As a result, I make sure to return borrowed items in the same condition that I received them. It was natural for me to respect the belongings of others after learning to respect my own. Being able to recognize the source of my morals can help improve my understanding of myself. Knowing that I was guided by the right people provides me with evidence that I can trust my ethical standards.
            
            My culture and role models were parts of my childhood that taught me how to be human. Recognizing how my upbringing shaped my personhood is essential to expand my understanding of myself. Since being human is not an intuitive concept that can be learned without prior experience, childhood is one stage in life that teaches us how to be humans. Many people never question what being human is. We should strive to reflect on our childhood to fully discover the meaning behind it all.
            
            <center>Works Cited</center>
            CBC Radio. “Why Senator Murray Sinclair Has Decided It’s Time to Share His Story and Write a Memoir | CBC Radio.” CBC, https://www.cbc.ca/radio/thenextchapter/full-episode-july-31-2021-1.5806723/why-senator-murray-sinclair-has-decided-it-s-time-to-share-his-story-and-write-a-memoir-1.5806728. Accessed 13 Oct. 2022.
            
            Joseph, Bob. 7 Tips on Building Relationships with Indigenous Peoples. https://www.ictinc.ca/blog/7-tips-on-building-relationships-with-indigenous-peoples. Accessed 13 Oct. 2022.
            
            ---. First Nation Relationship to the Land. https://www.ictinc.ca/blog/first-nation-relationship-to-the-land. Accessed 13 Oct. 2022.
            
            ---. Indigenous Peoples Worldviews vs Western Worldviews. https://www.ictinc.ca/blog/indigenous-peoples-worldviews-vs-western-worldviews. Accessed 13 Oct. 2022.
            
            ---. What Reconciliation Is And What It Is Not. https://www.ictinc.ca/blog/what-reconciliation-is-and-what-it-is-not. Accessed 13 Oct. 2022.
            `
        )
    });

    $('<div>').addClass('navbtn').text('Reflection 2').hover(
        function () {
            $(this).text("Having Good Community");
        },
        function () {
            $(this).text('Reflection ' + $(this).data('number'));
        }
    ).data('number', 2).prependTo($('#nav #btns')).click(() => {
        $('#content')
    });

    $('<div>').addClass('navbtn').text('Reflection 3').hover(
        function () {
            $(this).text("Living Together");
        },
        function () {
            $(this).text('Reflection ' + $(this).data('number'));
        }
    ).data('number', 3).prependTo($('#nav #btns')).click(() => {

    });

    $('<div>').addClass('navbtn').text('Final Reflection').hover(
        function () {
            $(this).text("Understanding the Purpose");
        },
        function () {
            $(this).text('Final Reflection');
        }
    ).prependTo($('#nav #btns')).click(() => {

    });
});