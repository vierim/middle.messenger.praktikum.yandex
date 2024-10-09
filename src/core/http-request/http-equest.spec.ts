import sinon from "sinon";
import { expect } from "chai";

import HttpRequest from "./http-request";
import { HttpMethods } from "./interface";

describe('HttpRequest', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should call _request with GET method', async () => {
    const httpInstance = new HttpRequest('/api');
    const requestStub = sinon.stub(httpInstance, '_request').resolves('OK');


    await httpInstance.get('/test');

    expect(requestStub.calledWithMatch('/api/test', HttpMethods.GET)).to.be.true;
  });
  
  it('should call _request with POST method and JSON payload', async () => {
    const httpInstance = new HttpRequest('/api');
    const endPointUrl = '/test';
    const requestData = { data: 'payload' };
    const requestStub = sinon.stub(httpInstance, '_request').resolves('OK');


    await httpInstance.post(endPointUrl, requestData);

    expect(requestStub.calledWithMatch('/api/test', HttpMethods.POST, JSON.stringify(requestData))).to.be.true;
  }); 

  it('should call _request with PUT method and JSON payload', async () => {
    const httpInstance = new HttpRequest('/api');
    const endPointUrl = '/test';
    const requestData = { data: 'payload' };
    const requestStub = sinon.stub(httpInstance, '_request').resolves('OK');


    await httpInstance.put(endPointUrl, requestData);

    expect(requestStub.calledWithMatch('/api/test', HttpMethods.PUT, JSON.stringify(requestData))).to.be.true;
  }); 

  it('should call _request with DELETE method and JSON payload', async () => {
    const httpInstance = new HttpRequest('/api');
    const endPointUrl = '/test';
    const requestData = { data: 'payload' };
    const requestStub = sinon.stub(httpInstance, '_request').resolves('OK');


    await httpInstance.delete(endPointUrl, requestData);

    expect(requestStub.calledWithMatch('/api/test', HttpMethods.DELETE, JSON.stringify(requestData))).to.be.true;
  }); 

  it('should handle request error correctly', async () => {
    const httpInstance = new HttpRequest('/api');
    const endPointUrl = '/test';
    const requestData = { data: 'payload' };
    sinon.stub(httpInstance, '_request').rejects();

    try {

      await httpInstance.post(endPointUrl, requestData);
    } catch (error: unknown) {
      expect(error).to.be.instanceOf(Error);
    }

  });
});
