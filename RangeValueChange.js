// range value change horhi or image size chota barha horha
<script>
    $('#myRange').on('input', function(){
    let di_val = $(this).val();
    if(di_val == 0){
      di_val = "0.00";
    }
    else if(di_val == 5){
      di_val = "5.00";
    }
    $('.get_value span:first-child').text(di_val);
    $(this).parent().parent().find('img').css('width', (parseFloat(di_val)*43.33)+'%');
    });
</script>
<div class="col2">
  <div class="standard">
    <div class="col2_main">
      <div class="col2_box">
        <img src="{{ section.settings.image | img_url: 'master' }}" />
        <h2 class="get_value">
          <span>0.00</span>
          <span>ct.</span></h2>
          <div class="slidecontainer">
            <input type="range" min="0.00" max="5.00" value="0.00" step="0.01" class="slider" id="myRange">
          </div>
      </div>
      <div class="col2_box">
        <img src="{{ section.settings.image | img_url: 'master' }}" />
        <h2>1.00 <span>ct.</span></h2>
        <div class="slidecontainer">
          <input type="range" min="0.00" max="5.00" value="0.00" step="0.01" class="slider" id="myRange">
        </div>
      </div>
    </div>
  </div>
</div>
<style>
  .slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}
</style>
{% schema %}
  {
    "name": "Education 02",
    "settings": [
      {
        "type" : "image_picker",
        "id" : "image",
        "label" : "Image"
      }
    ],
    "presets" : [
      {
        "name" : "Education 02"
      }
    ]
  }
{% endschema %}
