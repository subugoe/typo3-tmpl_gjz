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
 * View Helper to return classification
 */
namespace Gjz18\TmplGjz\ViewHelpers;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class ZssStatistikSystemstellenViewHelper extends \TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper {


  /**
   * Registers own arguments.
   */
  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('string', 'string', 'The string to extract the ID from', TRUE);
  }


  /**
   * @return array
   */
  public function render() {
    $id = NULL;
    $result = NULL;
    $xml = NULL;
    $sxe = NULL;
    $path = NULL;
    $zssArrayRaw_SystStPPN = NULL;
    $zssArrayRaw_SystStCOUNT = NULL;
    $zssArray_SystStPPN = NULL;
    $zssArray_SystStCOUNT = NULL;

    if ($this->arguments['string']) {
      $id = $this->arguments['string'];
    }
    $idClean = str_replace(" ", "", $id[0]);
    
    
    $url = "http://gjz18solr.tc.sub.uni-goettingen.de/solr410-adw/adw/select?q=d039Bs9%3A".$idClean."&rows=1&fl=d045Q01s9&wt=xml&indent=true&facet=true&facet.query=d039Bs9%3A".$idClean."&facet.field=d045Q01s9";
    $includeHeader=false;
    $requestHeaders=false;
    $report=NULL;
    
    $xml = GeneralUtility::getUrl($url, $includeHeader, $requestHeaders, $report);
    
    if ($xml) {
      $sxe = new \SimpleXMLElement($xml);
      
      if ($sxe) {
        $zssArrayRaw_SystStPPN = $sxe->xpath("//lst[@name='d045Q01s9']/int/@name");
        $zssArrayRaw_SystStCOUNT = $sxe->xpath("//lst[@name='d045Q01s9']/int");
        $zssArray_SystStPPN = $zssArrayRaw_SystStPPN;
        $zssArray_SystStCOUNT = $zssArrayRaw_SystStCOUNT;
        
        /** Return facetted List of classifications */
        if ($zssArray_SystStCOUNT[0] == 0) {
          return NULL;
        }
        else {
          for ($i=0; $i<7; $i++) {
            if ($zssArray_SystStCOUNT[$i] == 0) {
              return $result;
            }
            else {
              $result[$i] = $zssArray_SystStPPN[$i]." QQTTzsSystCount(".$zssArray_SystStCOUNT[$i].")zsSystCountTTQQ";
            }
          }
          return $result;
        }
      }
      else return NULL;
    }
    else return NULL;
    
  }
  
}

?>
