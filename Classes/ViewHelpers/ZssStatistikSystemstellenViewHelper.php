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
class ZssStatistikSystemstellenViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


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
    
    
    $url = "http://gjz18solr.tc.sub.uni-goettingen.de/solr-adw/adw/select?q=d039Bs9%3A".$idClean."&rows=1&fl=d045Q01s9&wt=xml&indent=true&facet=true&facet.query=d039Bs9%3A".$idClean."&facet.field=d045Q01s9";
    $useragent="cURL";
    $headers=false;
    $follow_redirects=false;
    $debug=false;
    
    # initialise the CURL library
    $ch = curl_init();
     
    # specify the URL to be retrieved
    curl_setopt($ch, CURLOPT_URL,$url);
     
    # we want to get the contents of the URL and store it in a variable
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
     
    # specify the useragent: this is a required courtesy to site owners
    curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
     
    # ignore SSL errors
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
     
    # return headers as requested
    if ($headers==true){
    curl_setopt($ch, CURLOPT_HEADER,1);
    }
     
    # only return headers
    if ($headers=='headers only') {
    curl_setopt($ch, CURLOPT_NOBODY ,1);
    }
     
    # follow redirects - note this is disabled by default in most PHP installs from 4.4.4 up
    if ($follow_redirects==true) {
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); 
    }
     
    # if debugging, return an array with CURL's debug info and the URL contents
    if ($debug==true) {
    $result['contents']=curl_exec($ch);
    $result['info']=curl_getinfo($ch);
    }
     
    # otherwise just return the contents as a variable
    else $xml=curl_exec($ch);
     
    # free resources
    curl_close($ch);
    
    
    
    if ($xml) {
      $sxe = new SimpleXMLElement($xml);
      
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
