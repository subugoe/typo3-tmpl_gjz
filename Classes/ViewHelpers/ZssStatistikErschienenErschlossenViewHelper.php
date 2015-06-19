<?php
/*******************************************************************************
 * Copyright notice
 *
 * Copyright 2015 Marcus Hellmann, Göttingen Academy of Sciences and Humanities
 *                <mhellma1@gwdg.de>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 ******************************************************************************/
 
 
/**
 * View Helper to return publication period of journal and the amount of records for each year
 * optimized for visualization with jQuery.flot
 */
namespace Gjz18\TmplGjz\ViewHelpers;
use TYPO3\CMS\Core\Utility\GeneralUtility;
class ZssStatistikErschienenErschlossenViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


  /**
   * Registers own arguments.
   */
  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('string', 'string', 'The string to extract the ID from', TRUE);
    $this->registerArgument('beginn', 'int', 'The string to extract the year of publication begin from', TRUE);
    $this->registerArgument('ende', 'int', 'The string to extract the year of publication end from', TRUE);
  }

  /**
   * @return array
   */
  public function render() {
    $id = NULL;
    $result = NULL;
    $finalString = NULL;
    $xml = NULL;
    $sxe = NULL;
    $path = NULL;
    $pubBegin = NULL;
    $pubEnd = NULL;
    $years = NULL;
    $zssArrayRaw_Jahr = NULL;
    $zssArrayRaw_Anzahl = NULL;
    $zssArray_Jahr = NULL;
    $zssArray_Anzahl = NULL;
    $yearCleaned = NULL;
    if ($this->arguments['string']) {
      $id = $this->arguments['string'];
    }
    $idClean = str_replace(" ", "", $id[0]);
    
    /** @years : length of publication period */
    if ($this->arguments['beginn']) {
      $pubBegin = $this->arguments['beginn'];
    }
    if ($this->arguments['ende']) {
      $pubEnd = $this->arguments['ende'];
    }
    $years = ($pubEnd - $pubBegin) + 1;
    
    
    
    $url = "http://gjz18solr.tc.sub.uni-goettingen.de/solr-adw/adw/select?q=d039Bs9%3A".$idClean."&rows=1&fl=i011_sa&wt=xml&indent=true&facet=true&facet.query=d039Bs9%3A".$idClean."&facet.field=i011_sa";
    $includeHeader=false;
    $requestHeaders=false;
    $report=NULL;
    
    $xml = GeneralUtility::getUrl($url, $includeHeader, $requestHeaders, $report);
    
    
    
    /** Get XML content from solr answer */
      if ($xml) {
      
        $sxe = new \SimpleXMLElement($xml);
        
        if ($sxe) {
          $zssArrayRaw_Jahr = $sxe->xpath("//lst[@name='i011_sa']/int/@name");
          $zssArrayRaw_Anzahl = $sxe->xpath("//lst[@name='i011_sa']/int");
          $zssArray_Jahr = $zssArrayRaw_Jahr;
          $zssArray_Anzahl = $zssArrayRaw_Anzahl;
          
          if ($zssArray_Anzahl[0] == 0) {
            for ($year=$pubBegin; $year<($pubBegin+$years); $year++) {
              if ($year!=$pubBegin) {
                $finalString .= ", ";
              }
              //$finalString .= "[\"".$year."\", 0]";
              $finalString .= "{data: [ ['".$year."', 11111] ], color: '#BBBBBB'}";
            }
          }
          else {
            for ($year=$pubBegin; $year<($pubBegin+$years); $year++) {
              if ($year!=$pubBegin) {
                $finalString .= ", ";
              }
              
              if ($zssArray_Anzahl[$year-$pubBegin] == "0") {
                $yearCleaned = 0;
              }
              else {
                $yearCleaned = $year;
              }
              
              if (in_array($yearCleaned, $zssArray_Jahr)) {
                $keyJahrAnzahl = array_search($year, $zssArray_Jahr);
                
                if ($zssArray_Anzahl[$keyJahrAnzahl] == 0) {
                  $finalString .= "{data: [ ['".$year."', 11111] ], color: '#BBBBBB'}";
                }
                else {
                  /** Falls Einträge im entsprechenden Jahr vorhanden, setze "1", sonst "0" **/
                  //$finalString .= "[\"".$year."\", 1]";
                  
                  /** Anzahl der Einträge pro Jahr **/
                  //$finalString .= "[\"".$year."\", ".$zssArray_Anzahl[$keyJahrAnzahl]."]";
                  $finalString .= "{data: [ ['".$year."', ".$zssArray_Anzahl[$keyJahrAnzahl]."] ], color: '#4579B3'}";
                }
                
              }
              else {
                //$finalString .= "[\"".$year."\", 0]";
                $finalString .= "{data: [ ['".$year."', 11111] ], color: '#BBBBBB'}";
              }
              
            }
            
          }
          echo($finalString);
          return $finalString;
          
        }
        else return NULL;
        
      }
      else return NULL;
      
  }
  
}

?>
