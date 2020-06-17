package com.matrix.proxy.service;

import com.matrix.proxy.db.entity.BasicInformation;

import java.util.List;

/**
 * 用于处理基础数据
 * @ClassName BasicDataService
 * @Author QIANGLU
 * @Date 2020/6/10 11:28 上午
 * @Version 1.0
 */
public interface AppDataService {

    /**
     * 获取应用实例列表
     * @return
     */
    public List<BasicInformation> getAppList();
}
