<div class="col1">
  <div class="col1_main">

    <div class="col1_top">
      {% for block in section.blocks %}
        <h1>{{ block.settings.collection }}</h1>
      {% endfor %}
    </div>
    <div class="col1_bottom">
    {% for block in section.blocks %}
    {% assign collection = collections[block.settings.collection] %}
      <div class="col1_tabs_show">
        {% for product in collection.products %}
          {{ product.title }}
        {% endfor %}
      </div>
    {% endfor %}
    </div>
  </div>
</div>


{% schema %}
  {
    "name": "Product-01",
    "settings": [],
    "blocks" : [
      {
        "name" : "add collection",
        "type" : "collection",
        "settings" : [
          {
            "type": "collection",
            "id" : "collection",
            "label" : "Collection"
          }
        ]
      }
    ],
    "presets" : [
      {
        "name" : "Product-01"
      }
    ]
  }
{% endschema %}

{% stylesheet %}
{% endstylesheet %}

{% javascript %}
{% endjavascript %}


$('.col1_top h1').on('click',function(){
    let child = $(this).index() + 1;
   $(this).parent().find('.active').removeClass('active');
   $(this).addClass('active');
   $(this).parent().parent().find('.col1_bottom>div').hide();
   $(this).parent().parent().find('.col1_bottom>div:nth-child('+child+')').show();
});
