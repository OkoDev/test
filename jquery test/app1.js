$('.panels').tabs();

$(function app1() {
	
let elementNames = [];
  function showInfo() {
    let name = $('input[name=element]').val();
    let item = elements.find(function(item) { return (item.name === name); });
    $('.summary').text(item? item.summary : '');
  }

  $(function() {
    elementNames = elements.map(function(item) { return item.name; });
    $('input[name=element]').on('input', showInfo);

    $('input[name=element]').autocomplete({
      source: elementNames,
      close: showInfo,
      delay: 200
    });
  });
	});

$(function app2() {

//	let $td = $('<td>').val();
//
//if($(this).isNumeric() && (n%2)==0) 
//
//{
//
//$td.css("background-color", 'green').css("color", 'white');
//
//}
    function showPlanets(planets) {
    let tbody = $('table tbody');
    tbody.empty();
    for (let planet of planets) {
      let tr = $('<tr>').appendTo(tbody);
      $('<td>').text(planet.name).appendTo(tr);
      $('<td>').text(planet['diameter (km)']).appendTo(tr);
      $('<td>').text(planet['mean temperature at surface (C)'].from).appendTo(tr);
    }
  }
     showPlanets (planets);
    
$("td").each(function( index ) {

      var t = parseInt($(this).text())

       if (t) {
          if (t < 0) {
            $( this ).css( "color", "red" );
          }
          else {
            $( this ).css( "color", "green" );
          }
       }
       else {
        $( this ).css( "color", "blue" );
       }

});
});

$(function app3() {

//вар1
//	$("#select-town").change(function () {
//		let $tr = $("#towns tbody>tr");
//		if ($(this).val() != "all") {
//			$tr.hide();
//			$tr.filter("[data-group='" + $(this).val() + "']").show();
//		} else {
//			$tr.show();
//		}
//	});
//
//	let arGroups = [];
//	$("#towns tbody>tr").each(function () {
//		if (arGroups.indexOf($(this).data("group")) == -1) {
//			arGroups.push($(this).data("group"));
//		}
//	});
//	arGroups.sort();
//	let strOptions = "<option value='all'>--- не выбрана ---</option>";
//	for (let i = 0; i < arGroups.length; i++) {
//		strOptions += "<option value='" + arGroups[i] +
//			"'> Группа" + arGroups[i] + "</option>";
//	}
//	$("#select-town").html(strOptions);

//});

////вар2
// 
            $('button').button({

                disabled: true
            });
            $('button').button("option", "disabled", false);
        });

        $('#sam').click(function() {
            $('.saratov').hide();
            $('.minsk').hide();
            $('.ulyanovsk').hide();
            $(this).closest('.samara').show();
            $('#sam').css("background-color", 'green').css("color", 'white');

        })
        $('#msk').click(function() {
            $('.saratov').hide();
            $('.samara').hide();
            $('.ulyanovsk').hide();
            $(this).closest('.minsk').show();
        })
        $('#ul').click(function() {
            $('.saratov').hide();
            $('.samara').hide();
            $('.minsk').hide();
            $(this).closest('.ulyanovsk').show();
        })
        $('#sar').click(function() {
            $('.ulyanovsk').hide();
            $('.samara').hide();
            $('.minsk').hide();
            $(this).closest('.saratov').show();
        })
        $('#close').click(function() {
            $('.saratov').show();
            $('.ulyanovsk').show();
            $('.minsk').show();
            $('.samara').show();
            $('#sam').button();

});

$(function app4() {

	    let $cont=$("#students");
   students.forEach(function(student){
        $cont.append(`<div class="row student" data-student>
                     <div class="col-md-5">${student.name.last}</div>
        <div class="col-md-5">${student.name.first}</div>
        <div class="col-md-2" data-age>${student.age}</div>
       `);
    })
//});
 //$( function() {
   let $studentRows=$cont.find("[data-student]");
    
    $( "#slider-range" ).slider({
      range: true,
      min: 16,
      max: 45,
      values: [ 20, 30 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( " " + ui.values[ 0 ] + " -  " + ui.values[ 1 ] );
          $studentRows.each(function(i, student){
              let min=+ui.values[0];
              let max=+ui.values[1];
              let age=+$(student).find('[data-age]').text();
                                      
                           if (age>=min && age<=max){
                  $(student).show();
              }
              else $(student).hide();
                               
                            })
      }
    });
    $( "#amount" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
      " -  " + $( "#slider-range" ).slider( "values", 1 ) );
  } );
$( function() {
    $( "#students" ).sortable();
    $( "#students" ).disableSelection();

});

$(function app5() {

   })
 

$(function app6() {
	
$("#menu").menu({
      position: {
        my: 'center top',
        at: 'right bottom'
      },
      icons: { 
        submenu: 'ui-icon-triangle-1-s'
      }
    });
    
    $(".main menu").each(function(index){
                $(this).parent().click(function(){ 
                        $(this).find("ul li ul").toggle()
  
});
});
    
//    $("#menu li>ul").hide();  
//      $("#menu li ul").each(function(index){
//                $(this).parent().click(function(){ 
//                        $(this).find("ul").toggle()
//                });
//      })
    
});

$(function app7() {

	$(".btn").click(function(){  
             $("#koleso")  
              .clone()  
              .css({'position' : 'absolute', 'z-index' : '100'})  
              .appendTo(".btn")  
              .animate({opacity: 0.5,   
                            marginLeft: 700,  
                            width: 20,   
                            height: 20}
					   , 700,
					   function() {  
                    $(this).remove();  
              });  
         });  
    });  
    $(".btn").click(function () {
    let $s = $("#s");
    let $q = $("#q");
    $s.text(parseFloat($s.text()) + parseFloat($(this).data("price")));
    $q.text(parseInt($q.text()) + 1);

});

$(function app8() {


});

$(function app9() {
	
let pcsS = 20 * 30;

	function val() {
		let h = Number($("#height").slider('value'));
		let w = Number($("#width").slider('value'));
		let wallS = w * h;
		let pcsCount = Math.ceil(wallS / pcsS);

		$('.height').text(h);
		$('.width').text(w);
		$('#count').text(pcsCount);
	}

	$("#height").slider({
		orientation: 'vertical',
		max: 500,
		slide: val
	});

	$("#width").slider({
		max: 500,
		slide: val
	});


});

$(function app10() {

    let dialog, form,
       name = $( "#name" ),
      price = $( "#price" ),
     allFields = $( [] ).add( name ).add( price );
     
    function addProduct() {
      
        $( "#products tbody" ).append( "<tr>" +
          "<td>" + n +
          "<td>" + name.val() + "</td>" +
          "<td>" + price.val() + "</td>" +
          "</td>" +
        "</tr>" );
        dialog.dialog( "close" );
     
    }
 
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 450,
      modal: true,
      buttons: {
        "Добавить товар": addProduct,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
    form = dialog.find( "form" ).on( function( event ) {
     
      addProduct();
    });
 let n=1;
    $( "#create-product" ).button().on( "click", function() {
      dialog.dialog( "open" );
        n=n+1;
    });

});

$(function app11() {
	function hexFromRGB(r, g, b) {
                let hex = [r.toString(16), g.toString(16), b.toString(16)];
                $.each(hex, function(nr, val) {
                    if (val.length === 1) {
                        hex[nr] = "0" + val;
                    }
                });
                return hex.join("").toUpperCase();
            }

            function refreshSwatch() {
                let red = $("#red").slider("value"),
                    green = $("#green").slider("value"),
                    blue = $("#blue").slider("value"),
                    hex = hexFromRGB(red, green, blue);
                $("#swatch").css("background-color", "#" + hex);
                $("#tex").css("color", "#" + hex);
            }

            $("#red, #green, #blue").slider({
                orientation: "horizontal",
                range: "min",
                max: 255,
                value: 127,
                slide: refreshSwatch,
                change: refreshSwatch
            });
            $("#red").slider("value", 255);
            $("#green").slider("value", 140);
            $("#blue").slider("value", 60);

});

$(function app12() {

	$('button').on('click', () => {
                $('#planetList').accordion('option', 'active', 2)
           });
	
	let $box = $('#planetList');
     $box.empty();

   planets.forEach(function (planet) {
       console.log(planets.length);
      $box
        .append($('<h3>' + planet.name + ' ' + planet["mean orbital velocity (km/sec)"] + '</h3>'))
        .append($('<div><p>'+'Диаметр в км ' + planet["diameter (km)"]+'<br>' + 'Масса планеты (если Земля=1) ' + planet["mass (Earth=1)"] + '</p></div>'));
    });

    $('#planetList').accordion();

});