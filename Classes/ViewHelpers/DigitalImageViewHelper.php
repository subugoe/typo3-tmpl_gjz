<?php

namespace Gjz18\TmplGjz\ViewHelpers;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Html\HtmlParser;
use TYPO3\CMS\Core\Imaging\GraphicalFunctions;

class DigitalImageViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

  /**
   * Registers own arguments.
   */
  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
    $this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
  }

  /**
   * @return string
   */
  public function render() {
    $result = NULL;

    if ($this->arguments['array']) {
      if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
        $result = $this->arguments['array'][$this->arguments['key']];
      }
    }
    
    $url = $result;
    
    if ( strpos($url, "http://daten.digitale-sammlungen.de/bsb") !== FALSE ) {
      $resultURL = "http://daten.digitale-sammlungen.de/~db/";
      $subStr_bsbNr = substr($url, strpos($url, ".de/bsb")+7, 4);
      $resultURL .= $subStr_bsbNr;
      $resultURL .= "/";
      $subStr_bookNr = substr($url, strpos($url, ".de/bsb")+4, 11);
      $resultURL .= $subStr_bookNr;
      $resultURL .= "/images/";
      $resultURL .= $subStr_bookNr;
      $resultURL .= "_";
      $subStr_imgNr = substr($url, strpos($url, "/image_")+7);
      if ( strlen($subStr_imgNr) === 1 ) {$subStr_imgNr = "0000".$subStr_imgNr;}
      if ( strlen($subStr_imgNr) === 2 ) {$subStr_imgNr = "000".$subStr_imgNr;}
      if ( strlen($subStr_imgNr) === 3 ) {$subStr_imgNr = "00".$subStr_imgNr;}
      if ( strlen($subStr_imgNr) === 4 ) {$subStr_imgNr = "0".$subStr_imgNr;}
      $resultURL .= $subStr_imgNr;
      $resultURL .= ".jpg";
      return $resultURL;
    }
    elseif ( ( (strpos($url, "http://reader.digitale-sammlungen.de/de/fs") !== FALSE) || (strpos($url, "http://bavarica.digitale-sammlungen.de/de/fs1/object/display/") !== FALSE) ) && (strpos($url, "html?pageNo=") === FALSE) ) {
      $resultURL = "http://reader.digitale-sammlungen.de/object/";
      $subStr_imgNr = substr($url, strpos($url, "/display/")+9, -5);
      $underlinePos = strpos($subStr_imgNr, "_");
      $subStr_imgNrPrefix = substr($subStr_imgNr, 0, $underlinePos+1);
      $subStr_imgNrSuffix = substr($subStr_imgNr, $underlinePos+1);
      if ( strlen($subStr_imgNrSuffix) === 1 ) {$subStr_imgNrSuffix = "0000".$subStr_imgNrSuffix;}
      if ( strlen($subStr_imgNrSuffix) === 2 ) {$subStr_imgNrSuffix = "000".$subStr_imgNrSuffix;}
      if ( strlen($subStr_imgNrSuffix) === 3 ) {$subStr_imgNrSuffix = "00".$subStr_imgNrSuffix;}
      if ( strlen($subStr_imgNrSuffix) === 4 ) {$subStr_imgNrSuffix = "0".$subStr_imgNrSuffix;}
      $subStr_imgNr = $subStr_imgNrPrefix.$subStr_imgNrSuffix;
      $resultURL .= $subStr_imgNr;
      $resultURL .= ".svg";
      return $resultURL;
    }
    elseif ( ( (strpos($url, "http://reader.digitale-sammlungen.de/de/fs") !== FALSE) || (strpos($url, "http://bavarica.digitale-sammlungen.de/de/fs1/object/display/") !== FALSE) ) && (strpos($url, "html?pageNo=") !== FALSE) ) {
      $resultURL = "http://reader.digitale-sammlungen.de/object/";
      $subStr_bookNrLong = substr($url, strpos($url, "/goToPage/")+10);
      $subStr_bookNr = substr($subStr_bookNrLong, 0, strpos($subStr_bookNrLong, "html?pageNo=")-1);
      $subStr_imgNr = substr($url, strpos($url, "html?pageNo=")+12);
      
      if ( strlen($subStr_imgNr) === 1 ) {$subStr_imgNr = "0000".$subStr_imgNr;}
      if ( strlen($subStr_imgNr) === 2 ) {$subStr_imgNr = "000".$subStr_imgNr;}
      if ( strlen($subStr_imgNr) === 3 ) {$subStr_imgNr = "00".$subStr_imgNr;}
      if ( strlen($subStr_imgNr) === 4 ) {$subStr_imgNr = "0".$subStr_imgNr;}
      $subStr_imgNr = $subStr_bookNr."_".$subStr_imgNr;
      $resultURL .= $subStr_imgNr;
      $resultURL .= ".svg";
      return $resultURL;
    }
    elseif ( strpos($url, "http://gdz.sub.uni-goettingen.de/dms/load/img/?PPN=") !== FALSE ) {
      $resultURL = "http://gdz-srv1.sub.uni-goettingen.de/content/";
      $subStr_ppn = substr($url, strpos($url, "/?PPN=")+6, strpos($url, "&PHYSID="));
      $subStr_physID = substr($url, strpos($url, "&PHYSID=PHYS_")+13);
      $resultURL .= $subStr_ppn;
      $resultURL .= "/800/0/0000";
      $resultURL .= $subStr_physID;
      $resultURL .= ".jpg";
      if(!@GraphicalFunctions::getImageDimensions($resultURL)) {
        /** Get html content from url */
        /*$includeHeader="1";
        $requestHeaders=false;
        $report=NULL;
        $html = GeneralUtility::getUrl($url, $includeHeader, $requestHeaders, $report);*/
        $ch = curl_init();
        $timeout = 0;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $html = curl_exec($ch);
        curl_close($ch);
        
        /** Load html content in new DOM document */
        $dom = new \DOMDocument();
        $dom->loadHTML($html);
        
        /** Get image tags */
        /*$tag = "img";
        foreach($dom->HtmlParser::get_tag_attributes($tag) as $imageLink) {
          if (strpos($imageLink, "PPN") !== FALSE) {
            $resultURL = $imageLink->getAttribute('src');
          }
        }*/
        //foreach($dom->getElementsByTagName('img') as $imageLink) {
          //$resultURL = "00";
          /*if (strpos($imageLink->getAttribute('src'), "PPN") !== FALSE) {
            $resultURL = $imageLink->getAttribute('src');
          }*/
        //}
      }
      return $resultURL;
    }
    elseif ( (strpos($url, "http://vd18.de/") !== FALSE) && (strpos($url, "/pageview/") !== FALSE) ) {
      $prefix = "http://vd18.de/";
      $bibLong = (string)substr($url, strpos($url, "http://vd18.de/")+15, strpos($url, "/pageview/"));
      $bib = (string)substr($bibLong, 0, strpos($bibLong, "/"));
      $imgNr = (string)substr($url, strpos($url, "/pageview/")+10);
      $resultURL = $prefix.$bib."/image/view/".$imgNr."?w=800";
      return $resultURL;
    }
    
  }
  
}
?>