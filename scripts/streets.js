function init_streets()
{
	if (!$('[name=city]:checked').val()) return;
	
    var street = $('#name-street');
    var build = $('#name-build');
    var TEX = $('#name-TEX');
    var city = city_streets[$('[name=city]:checked').val()];

    $(street).children().remove();
    $(build).children().remove();
    $(TEX).children().remove();

    var element = document.createElement('option');
    element.value = '';
    element.appendChild(document.createTextNode('Выберите улицу'));
    street.append(element);
    
	var element = document.createElement('option');
    element.value = 'Другая улица';
    element.appendChild(document.createTextNode('Другая улица'));
    street.append(element);
	
    if (!city) return;
    
    var i = 0;
    var street_item;    
    while (street_item = city.streets[i]) 
    {
        var element = document.createElement('option');
        element.value = street_item.street;
        console.log(street_item)
        element.appendChild(document.createTextNode(street_item.street));
        street.append(element);
        i++;
    }
    
    if( selected_street != '' ) $(street).children('[value="'+selected_street+'"]').attr('selected', 'selected').change();
    if( selected_build != '' ) setTimeout(function(){$(build).children('[value="'+selected_build+'"]').attr('selected', 'selected')} , 500);
    if( selected_TEX != '' ) setTimeut(function(){$(TEX).children('[value="'+selected_TEX+'"]').attr('selected', 'selected')} , 500);
        
}

function init_tarifs()
{
    var city;
    $('.tarifs').css('display', 'none');
    if($('[name="city"]:checked').val()=='ob')city = 'nsk';
    else city = $('[name="city"]:checked').val();
    $('.city_'+city).css('display', 'grid');    
}


$(function() { 
    
    $('[name="city"]').click(function() { 
        init_streets();
        init_tarifs();
    });
    
    $('#name-street').change(function() {
        
        var build = $('#name-build');
        var city = city_streets[$('[name=city]:checked').val()];
        
        $(build).children().remove();
        var element = document.createElement('option');
        element.value = '';
        element.appendChild(document.createTextNode('Выберите номер дома'));
        build.append(element);

		var element = document.createElement('option');
		element.value = 'Другой дом';
		element.appendChild(document.createTextNode('Другой дом'));
		build.append(element);
        var i = 0;
        var build_item;
        while (build_item = city.builds[i]) {
            if (build_item.street == this.value) 
            {
                var element = document.createElement('option');
                element.value = build_item.build;
                element.appendChild(document.createTextNode(build_item.build));
                build.append(element);
            }
            i++;
        }
    });
    $('#name-build').change(function() {

        var TEX = $('#name-TEX');
        var city = city_streets[$('[name=city]:checked').val()];

        $(TEX).chldren().remove();
        var element = document.createElement('option');
        element.value = '';
        element.appendChild(document.createTextNode('Узнать тех условия'));
        TEX.append(element);

        var element = document.createElement('option');
        element.value = 'нет информации';
        elemnt.appendChild(document.createTextNode('нет информации'));
        TEX.append(element);
        var i = 0;
        var TEX_item;
        while (TEX_item = city.TEXs[i]) {
        console.log(TEX_item);
        if (TEX_item.build == this.value && TEX_item.street == $('[name=street]').val() )
        {
        var element = document.createElement('option');
        element.value = TEX_item.TEX;
        element.appendChild(document.createTextNode(TEX_item.TEX));
        TEX.append(element);
        }
        i++;
        }
        });

    init_streets();
    init_tarifs();

});