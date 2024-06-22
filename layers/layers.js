var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RBI25K_ADMINISTRASI_AR_1 = new ol.format.GeoJSON();
var features_RBI25K_ADMINISTRASI_AR_1 = format_RBI25K_ADMINISTRASI_AR_1.readFeatures(json_RBI25K_ADMINISTRASI_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_ADMINISTRASI_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_ADMINISTRASI_AR_1.addFeatures(features_RBI25K_ADMINISTRASI_AR_1);
var lyr_RBI25K_ADMINISTRASI_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_ADMINISTRASI_AR_1, 
                style: style_RBI25K_ADMINISTRASI_AR_1,
                popuplayertitle: "RBI25K_ADMINISTRASI_AR",
                interactive: true,
                    title: '<img src="styles/legend/RBI25K_ADMINISTRASI_AR_1.png" /> RBI25K_ADMINISTRASI_AR'
                });
var format_RBI25K_PENDIDIKAN_AR_2 = new ol.format.GeoJSON();
var features_RBI25K_PENDIDIKAN_AR_2 = format_RBI25K_PENDIDIKAN_AR_2.readFeatures(json_RBI25K_PENDIDIKAN_AR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_PENDIDIKAN_AR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_PENDIDIKAN_AR_2.addFeatures(features_RBI25K_PENDIDIKAN_AR_2);
var lyr_RBI25K_PENDIDIKAN_AR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_PENDIDIKAN_AR_2, 
                style: style_RBI25K_PENDIDIKAN_AR_2,
                popuplayertitle: "RBI25K_PENDIDIKAN_AR",
                interactive: true,
                    title: '<img src="styles/legend/RBI25K_PENDIDIKAN_AR_2.png" /> RBI25K_PENDIDIKAN_AR'
                });
var format_RBI25K_SUNGAI_AR_25K_3 = new ol.format.GeoJSON();
var features_RBI25K_SUNGAI_AR_25K_3 = format_RBI25K_SUNGAI_AR_25K_3.readFeatures(json_RBI25K_SUNGAI_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_SUNGAI_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_SUNGAI_AR_25K_3.addFeatures(features_RBI25K_SUNGAI_AR_25K_3);
var lyr_RBI25K_SUNGAI_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_SUNGAI_AR_25K_3, 
                style: style_RBI25K_SUNGAI_AR_25K_3,
                popuplayertitle: "RBI25K_SUNGAI_AR_25K",
                interactive: true,
                    title: '<img src="styles/legend/RBI25K_SUNGAI_AR_25K_3.png" /> RBI25K_SUNGAI_AR_25K'
                });
var format_RBI25K_SUNGAI_LN_25K_4 = new ol.format.GeoJSON();
var features_RBI25K_SUNGAI_LN_25K_4 = format_RBI25K_SUNGAI_LN_25K_4.readFeatures(json_RBI25K_SUNGAI_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_SUNGAI_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_SUNGAI_LN_25K_4.addFeatures(features_RBI25K_SUNGAI_LN_25K_4);
var lyr_RBI25K_SUNGAI_LN_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_SUNGAI_LN_25K_4, 
                style: style_RBI25K_SUNGAI_LN_25K_4,
                popuplayertitle: "RBI25K_SUNGAI_LN_25K",
                interactive: true,
                    title: '<img src="styles/legend/RBI25K_SUNGAI_LN_25K_4.png" /> RBI25K_SUNGAI_LN_25K'
                });
var format_RBI25K_PENDIDIKAN_PT_5 = new ol.format.GeoJSON();
var features_RBI25K_PENDIDIKAN_PT_5 = format_RBI25K_PENDIDIKAN_PT_5.readFeatures(json_RBI25K_PENDIDIKAN_PT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_PENDIDIKAN_PT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_PENDIDIKAN_PT_5.addFeatures(features_RBI25K_PENDIDIKAN_PT_5);
var lyr_RBI25K_PENDIDIKAN_PT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_PENDIDIKAN_PT_5, 
                style: style_RBI25K_PENDIDIKAN_PT_5,
                popuplayertitle: "RBI25K_PENDIDIKAN_PT",
                interactive: true,
                    title: '<img src="styles/legend/RBI25K_PENDIDIKAN_PT_5.png" /> RBI25K_PENDIDIKAN_PT'
                });
var format_RBI25K_JALAN_AR_25K_6 = new ol.format.GeoJSON();
var features_RBI25K_JALAN_AR_25K_6 = format_RBI25K_JALAN_AR_25K_6.readFeatures(json_RBI25K_JALAN_AR_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_JALAN_AR_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_JALAN_AR_25K_6.addFeatures(features_RBI25K_JALAN_AR_25K_6);
var lyr_RBI25K_JALAN_AR_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_JALAN_AR_25K_6, 
                style: style_RBI25K_JALAN_AR_25K_6,
                popuplayertitle: "RBI25K_JALAN_AR_25K",
                interactive: true,
                    title: '<img src="styles/legend/RBI25K_JALAN_AR_25K_6.png" /> RBI25K_JALAN_AR_25K'
                });
var format_RBI25K_JALAN_LN_25K_7 = new ol.format.GeoJSON();
var features_RBI25K_JALAN_LN_25K_7 = format_RBI25K_JALAN_LN_25K_7.readFeatures(json_RBI25K_JALAN_LN_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_JALAN_LN_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_JALAN_LN_25K_7.addFeatures(features_RBI25K_JALAN_LN_25K_7);
var lyr_RBI25K_JALAN_LN_25K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_JALAN_LN_25K_7, 
                style: style_RBI25K_JALAN_LN_25K_7,
                popuplayertitle: "RBI25K_JALAN_LN_25K",
                interactive: true,
                    title: '<img src="styles/legend/RBI25K_JALAN_LN_25K_7.png" /> RBI25K_JALAN_LN_25K'
                });
var format_RBI25K_ADMINISTRASI_LN_8 = new ol.format.GeoJSON();
var features_RBI25K_ADMINISTRASI_LN_8 = format_RBI25K_ADMINISTRASI_LN_8.readFeatures(json_RBI25K_ADMINISTRASI_LN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_ADMINISTRASI_LN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_ADMINISTRASI_LN_8.addFeatures(features_RBI25K_ADMINISTRASI_LN_8);
var lyr_RBI25K_ADMINISTRASI_LN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_ADMINISTRASI_LN_8, 
                style: style_RBI25K_ADMINISTRASI_LN_8,
                popuplayertitle: "RBI25K_ADMINISTRASI_LN",
                interactive: true,
                    title: '<img src="styles/legend/RBI25K_ADMINISTRASI_LN_8.png" /> RBI25K_ADMINISTRASI_LN'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_RBI25K_ADMINISTRASI_AR_1.setVisible(true);lyr_RBI25K_PENDIDIKAN_AR_2.setVisible(true);lyr_RBI25K_SUNGAI_AR_25K_3.setVisible(true);lyr_RBI25K_SUNGAI_LN_25K_4.setVisible(true);lyr_RBI25K_PENDIDIKAN_PT_5.setVisible(true);lyr_RBI25K_JALAN_AR_25K_6.setVisible(true);lyr_RBI25K_JALAN_LN_25K_7.setVisible(true);lyr_RBI25K_ADMINISTRASI_LN_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RBI25K_ADMINISTRASI_AR_1,lyr_RBI25K_PENDIDIKAN_AR_2,lyr_RBI25K_SUNGAI_AR_25K_3,lyr_RBI25K_SUNGAI_LN_25K_4,lyr_RBI25K_PENDIDIKAN_PT_5,lyr_RBI25K_JALAN_AR_25K_6,lyr_RBI25K_JALAN_LN_25K_7,lyr_RBI25K_ADMINISTRASI_LN_8];
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_PENDIDIKAN_AR_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGDPDK': 'FGDPDK', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSPDK': 'JNSPDK', 'JJGPDF': 'JJGPDF', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_SUNGAI_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_SUNGAI_LN_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_PENDIDIKAN_PT_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_RBI25K_JALAN_AR_25K_6.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMOBJ': 'NAMOBJ', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_JALAN_LN_25K_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_ADMINISTRASI_LN_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'KARKTR': 'KARKTR', 'KLBADM': 'KLBADM', 'PJGBTS': 'PJGBTS', 'STSBTS': 'STSBTS', 'TIPLOK': 'TIPLOK', 'TIPTBT': 'TIPTBT', 'UUPP': 'UUPP', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_RBI25K_PENDIDIKAN_AR_2.set('fieldImages', {'NAMOBJ': '', 'KATPDK': '', 'JLPDDK': '', 'FGDPDK': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSPDK': '', 'JJGPDF': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_RBI25K_SUNGAI_AR_25K_3.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_RBI25K_SUNGAI_LN_25K_4.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_LEN': '', });
lyr_RBI25K_PENDIDIKAN_PT_5.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_RBI25K_JALAN_AR_25K_6.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_RBI25K_JALAN_LN_25K_7.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_RBI25K_ADMINISTRASI_LN_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADMIN1': '', 'ADMIN2': '', 'KARKTR': '', 'KLBADM': '', 'PJGBTS': '', 'STSBTS': '', 'TIPLOK': '', 'TIPTBT': '', 'UUPP': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAKLD1': '', 'WAKLD2': '', 'WAPRO1': '', 'WAPRO2': '', 'SHAPE_LEN': '', });
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_PENDIDIKAN_AR_2.set('fieldLabels', {'NAMOBJ': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGDPDK': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSPDK': 'no label', 'JJGPDF': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_SUNGAI_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_SUNGAI_LN_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_PENDIDIKAN_PT_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_RBI25K_JALAN_AR_25K_6.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMOBJ': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_JALAN_LN_25K_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_ADMINISTRASI_LN_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'KARKTR': 'inline label - always visible', 'KLBADM': 'inline label - always visible', 'PJGBTS': 'hidden field', 'STSBTS': 'no label', 'TIPLOK': 'no label', 'TIPTBT': 'no label', 'UUPP': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_ADMINISTRASI_LN_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});