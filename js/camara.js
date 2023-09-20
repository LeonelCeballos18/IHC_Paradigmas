function fnManoIzq( $info ) {
    idMensajeIzq.value = JSON.stringify( $info )
    $lista1 = $info.keypoints.filter( fnMedioIndicePunta ) ;
    
    function fnMedioIndicePunta( $punto ) {
      // .name .x .y
      if( /index|middle/i.test($punto.name) && /tip/i.test($punto.name) ) {
        return true ;
      }
      return false;
    }
    //console.table( $lista1 )
    $yIndice = $lista1[0].y ;
    $yMedio = $lista1[1].y ;
    idMensajeIzq.value = "Y índice:" + $yIndice + " - Y medio:" + $yMedio;
    if( ($yIndice > $yMedio) && $yIndice > 300 ) {
      document.body.style.background = "blue"
    }
    if( ($yIndice > $yMedio) && $yIndice < 100 ) {
      document.body.style.background = "red"
    }
    
  }
  function fnManoDer( $info ) {
    idMensajeDer.value = JSON.stringify( $info )
  }