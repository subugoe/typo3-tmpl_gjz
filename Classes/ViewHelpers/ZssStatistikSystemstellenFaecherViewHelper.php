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
 * View Helper to return array of classification and frequencies
 */
namespace Gjz18\TmplGjz\ViewHelpers;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class ZssStatistikSystemstellenFaecherViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


  /**
   * Registers own arguments.
   */
  public function initializeArguments() {
    parent::initializeArguments();
    $this->registerArgument('string', 'string', 'The array to extract the type from', TRUE);
    $this->registerArgument('decision', 'integer', 'The array to extract the title from', TRUE);
  }


  /**
   * @return array
   */
  public function render() {
  
    $key = NULL;
    if ($this->arguments['decision']) {
      $key = $this->arguments['decision'];
    }
    
    if ($key == 0) {
      $faecher = array("Wissenschaftskunde", "Philologie", "Theologie", "Jurisprudenz", "Medizin und Pharmazie", "Philosophie", "Pädagogik", "Staatswissenschaften", "Kriegswissenschaften", "Naturkunde", "Technologie und Gewerbekunde", "Mathematik", "Geographie", "Geschichte", "Bildende Kunst, schöne Literatur, Musik", "Literär-/Gelehrtengeschichte", "Vermischte Schriften");
      return $faecher;
    }
    
    elseif ($key == 1) {
      $id = NULL;
      $url = NULL;
      $includeHeader=false;
      $requestHeaders=false;
      $report=NULL;
      $xml = NULL;
      $sxe = NULL;
      $faecherCountArray = array();
      
      if ($this->arguments['string']) {
        $id = $this->arguments['string'];
      }
      $idClean = str_replace(" ", "", $id[0]);
      
      $faecher = array("WISSENSCHAFTSKUNDE", "PHILOLOGIE", "THEOLOGIE", "JURISPRUDENZ", "MEDIZIN", "PHILOSOPHIE", "P*DAGOGIK", "STAATSWISSENSCHAFTEN", "KRIEGSWISSENSCHAFTEN", "NATURKUNDE", "TECHNOLOGIE", "MATHEMATIK", "GEOGRAPHIE", "GESCHICHTE", "BILDENDE", "LITER*R", "VERMISCHTE");
      
      for ($i=0; $i<count($faecher); $i++) {
        $url = "http://gjz18solr.tc.sub.uni-goettingen.de/solr-adw/adw/select?q=d039Bs9%3A".$idClean."&fq=d045Q01sa%3A".$faecher[$i]."*&rows=0&fl=d045Q01sa&wt=xml&indent=true";
        $xml = GeneralUtility::getUrl($url, $includeHeader, $requestHeaders, $report);
        if ($xml==NULL) {
          $fachCount[0] = 0;
        }
        else {
          $sxe = new \SimpleXMLElement($xml);
          $fachCount = $sxe->xpath("//response/result[@name='response']/@numFound");
        }
        $faecherCountArray[$i] = $fachCount[0];
      }
      
      return $faecherCountArray;
      
    }
    
    else {
      $id = NULL;
      $url = NULL;
      $includeHeader=false;
      $requestHeaders=false;
      $report=NULL;
      $xml = NULL;
      $sxe = NULL;
      $faecherCountArray = array();
      $stringVisu = "";
      
      if ($this->arguments['string']) {
        $id = $this->arguments['string'];
      }
      $idClean = str_replace(" ", "", $id[0]);
      
      $faecher = array("WISSENSCHAFTSKUNDE", "PHILOLOGIE", "THEOLOGIE", "JURISPRUDENZ", "MEDIZIN", "PHILOSOPHIE", "P*DAGOGIK", "STAATSWISSENSCHAFTEN", "KRIEGSWISSENSCHAFTEN", "NATURKUNDE", "TECHNOLOGIE", "MATHEMATIK", "GEOGRAPHIE", "GESCHICHTE", "BILDENDE", "LITER*R", "VERMISCHTE");
      $faecherClean = array("Wissenschaftskunde", "Philologie", "Theologie", "Jurisprudenz", "Medizin und Pharmazie", "Philosophie", "Pädagogik", "Staatswissenschaften", "Kriegswissenschaften", "Naturkunde", "Technologie und Gewerbekunde", "Mathematik", "Geographie", "Geschichte", "Bildende Kunst, schöne Literatur, Musik", "Literär-/Gelehrtengeschichte", "Vermischte Schriften");
      $faecherCleanAbbrevs = array("Wiss.", "Philol.", "Theol.", "Jur.", "Med.", "Phil.", "Päd.", "Pol.", "Mil.", "Nat.", "Tech.", "Math.", "Geo.", "Gesch.", "Kü.", "Lit.", "Verm.");
      
      for ($i=0; $i<count($faecher); $i++) {
        if ($i!=0) {
          $stringVisu .= ", ";
        }
        $url = "http://gjz18solr.tc.sub.uni-goettingen.de/solr-adw/adw/select?q=d039Bs9%3A".$idClean."&fq=d045Q01sa%3A".$faecher[$i]."*&rows=0&fl=d045Q01sa&wt=xml&indent=true";
        $xml = GeneralUtility::getUrl($url, $includeHeader, $requestHeaders, $report);
        if ($xml==NULL) {
          $fachCount[0] = 0;
        }
        else {
          $sxe = new \SimpleXMLElement($xml);
          $fachCount = $sxe->xpath("//response/result[@name='response']/@numFound");
        }
        $faecherCountArray[$i] = $fachCount[0];
        $stringVisu .= "[\"".$faecherCleanAbbrevs[$i]."\", ".$fachCount[0]."]";
      }
      
      return $stringVisu;
      
    }
    
  }
  
}

?>
