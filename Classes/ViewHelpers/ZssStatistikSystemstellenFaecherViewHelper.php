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
    $this->registerArgument('beginn', 'int', 'The int to extract the year of publication begin from');
    $this->registerArgument('ende', 'int', 'The int to extract the year of publication end from');
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
        $url = "http://134.76.20.176:8080/solr/adw/select?q=d039Bs9%3A".$idClean."&fq=d045Q01sa%3A".$faecher[$i]."*&rows=0&fl=d045Q01sa&wt=xml&indent=true";
        // $url = "http://gjz18solr.tc.sub.uni-goettingen.de/solr410-adw/adw/select?q=d039Bs9%3A".$idClean."&fq=d045Q01sa%3A".$faecher[$i]."*&rows=0&fl=d045Q01sa&wt=xml&indent=true";
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
    
    elseif ($key == 3) {
      $id = NULL;
      $url = NULL;
      $includeHeader = false;
      $requestHeaders = false;
      $report = NULL;
      $xml = NULL;
      $sxe = NULL;
      $faecherCountArray = array();
      
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
      
      $open = fopen('http://www.gelehrte-journale.de/fileadmin/user_upload/res/systematikWarmup/faecher/systemstellenFaecherArray_'.$idClean.'.txt', 'r');
      fclose($open);
      if ($open) {
        $strArr = file_get_contents('http://www.gelehrte-journale.de/fileadmin/user_upload/res/systematikWarmup/faecher/systemstellenFaecherArray_'.$idClean.'.txt');
        return $strArr;
        
      }
      else {
        $years = ($pubEnd - $pubBegin) + 1;
        
        $faecher = array("WISSENSCHAFTSKUNDE", "PHILOLOGIE", "THEOLOGIE", "JURISPRUDENZ", "MEDIZIN", "PHILOSOPHIE", "P*DAGOGIK", "STAATSWISSENSCHAFTEN", "KRIEGSWISSENSCHAFTEN", "NATURKUNDE", "TECHNOLOGIE", "MATHEMATIK", "GEOGRAPHIE", "GESCHICHTE", "BILDENDE", "LITER*R", "VERMISCHTE");
        $faecherClean = array("Wissenschaftskunde", "Philologie", "Theologie", "Jurisprudenz", "Medizin und Pharmazie", "Philosophie", "Pädagogik", "Staatswissenschaften", "Kriegswissenschaften", "Naturkunde", "Technologie und Gewerbekunde", "Mathematik", "Geographie", "Geschichte", "Bildende Kunst, schöne Literatur, Musik", "Literär-/Gelehrtengeschichte", "Vermischte Schriften");
        $faecherCleanAbbrevs = array("Wiss.", "Philol.", "Theol.", "Jur.", "Med.", "Phil.", "Päd.", "Pol.", "Mil.", "Nat.", "Tech.", "Math.", "Geo.", "Gesch.", "Kü.", "Lit.", "Verm.");
        $faecherCountArrayDim2 = array_fill(0, 16, "");
        $faecherCountArrayDim3 = array_fill(0, $years, "");
        
        for ($y=0; $y<$years; $y++) {
          
          $year=$pubBegin+$y;
          
          for ($i=0; $i<count($faecher); $i++) {
            $url = "http://134.76.20.176:8080/solr/adw/select?q=d039Bs9%3A".$idClean."&fq=i011_sa%3A%22".$year."%22+d045Q01sa%3A".$faecher[$i]."*&rows=0&fl=d045Q01sa&wt=xml&indent=true";
            // $url = "http://gjz18solr.tc.sub.uni-goettingen.de/solr410-adw/adw/select?q=d039Bs9%3A".$idClean."&fq=i011_sa%3A%22".$year."%22+d045Q01sa%3A".$faecher[$i]."*&rows=0&fl=d045Q01sa&wt=xml&indent=true";
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
          
          for ($c=0; $c<17; $c++) {
            $faecherCountArrayDim2[$c] = [ $faecherCleanAbbrevs[$c], $faecherCountArray[$c] ];
          }
          
          $faecherCountArrayDim3[$y] = $faecherCountArrayDim2;
          
        }
        
        
        $strArr = "";
        for ($bar=0; $bar<$years; $bar++) {
          if ($bar!=0) {
            $strArr .= ", ";
          }
          for ($foo=0; $foo<17; $foo++) {
            if ($foo==0) {
              $strArr .= "[ ";
            }
            $strArr .= "['".($faecherCountArrayDim3[$bar][$foo][0]."', ".$faecherCountArrayDim3[$bar][$foo][1]."]");
            if ($foo==16) {
              $strArr .= " ]";
            }
            else {
              $strArr .= ", ";
            }
          }
        }
        
        return $strArr;
        //return $faecherCountArrayDim3;
      }
      
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
        $url = "http://134.76.20.176:8080/solr/adw/select?q=d039Bs9%3A".$idClean."&fq=d045Q01sa%3A".$faecher[$i]."*&rows=0&fl=d045Q01sa&wt=xml&indent=true";
        // $url = "http://gjz18solr.tc.sub.uni-goettingen.de/solr410-adw/adw/select?q=d039Bs9%3A".$idClean."&fq=d045Q01sa%3A".$faecher[$i]."*&rows=0&fl=d045Q01sa&wt=xml&indent=true";
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
